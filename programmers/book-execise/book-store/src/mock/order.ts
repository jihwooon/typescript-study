import {http, HttpResponse} from "msw";
import {faker} from "@faker-js/faker";
import {Order} from "../models/order.model";
import {bestBooksData} from "./books";

const selectedBookData = bestBooksData.map((book, index) => ({
    bookId: book.id,
    title: book.title,
    author: book.author,
    price: book.price,
    quantity: faker.helpers.rangeToNumber({ min: 1, max: 10 })  // quantity는 faker를 사용해 범위 내의 임의의 숫자로 설정
}));

const mockOrderData: Order[] = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    createdAt: faker.date.soon().toString(),
    address: faker.location.streetAddress(),
    receiver: faker.person.fullName(),
    contact: faker.phone.number().toString(),
    bookTitle: faker.lorem.sentence(),
    totalQuantity: faker.helpers.rangeToNumber({
        min: 1,
        max: 5,
    }),
    totalPrice: Number(faker.commerce.price({ min: 100 })),
    detail: selectedBookData
}));

export const order = http.post('http://localhost:9999/orders', async ({ request }) => {
    const orderData = await request.json();

    return HttpResponse.json(orderData, {
        status: 200,
    });
});

export const fetchOrders = http.get('http://localhost:9999/orders', async () => {
    return HttpResponse.json(mockOrderData, {
        status: 200,
    });
})

export const fetchOrder = http.get('http://localhost:9999/orders/:id', async ({ params }) => {
    const { id } = params;
    const cart = mockOrderData.find((order) => order.id === Number(id))

    return HttpResponse.json(cart, {
        status: 200,
    });
})
