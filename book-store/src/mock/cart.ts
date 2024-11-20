import {faker} from "@faker-js/faker";
import {http, HttpResponse} from "msw";
import {Cart} from "../models/cart.model";

const mockCartData: Cart[] = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    title: faker.commerce.productName(),
    bookId: faker.helpers.rangeToNumber({ min: 0, max: 5 }),
    summary: faker.lorem.lines(),
    quantity: faker.helpers.rangeToNumber({
        min: 1,
        max: 5,
    }),
    price: Number(faker.commerce.price({ min: 100 })),
}));

export const cart = http.post('http://localhost:9999/carts', async ({ request }) => {
    const info = await request.json();  // formData 대신 json 사용

    return HttpResponse.json(info, {
        status: 200,
    });
});

export const fetchCart = http.get('http://localhost:9999/carts', async () => {

    return HttpResponse.json(mockCartData, {
        status: 200,
    });
});

export const deleteCart = http.delete('http://localhost:9999/carts/:id', async ({ params }) => {
    const { id } = params;
    const cart = mockCartData.find((cart) => cart.id === Number(id))

    if (!cart) {
        return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(cart, {
        status: 200,
    });
});
