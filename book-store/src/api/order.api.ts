import {OrderSheet} from "../models/order.model";
import {httpClient} from "./http";

export const order = async (orderDate: OrderSheet) => {
    const response = await httpClient.post("/orders", orderDate);
    return response.data;
}
