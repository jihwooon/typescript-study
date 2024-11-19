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

export const addCart = http.post('http://localhost:9999/carts', async ({ request }) => {
    const info = await request.json();  // formData 대신 json 사용

    return HttpResponse.json(info, {
        status: 200,
    });
});
