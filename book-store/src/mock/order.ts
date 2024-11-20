import {http, HttpResponse} from "msw";

export const order = http.post('http://localhost:9999/orders', async ({ request }) => {
    const orderData = await request.json();

    return HttpResponse.json(orderData, {
        status: 200,
    });
});
