import {httpClient} from "./http";
import {Cart} from "../models/cart.model";

export interface AddCartProps {
    bookId: number;
    quantity: number;
}

export const addCart = async (params: AddCartProps) => {
    const response = await httpClient.post("/carts", params)
    return response.data;
}

export const fetchCartList = async () => {
    const response = await httpClient.get<Cart[]>("/carts");
    return response.data;
}

export const deleteCart = async (cartId: number) => {
    const response = await httpClient.delete(`/carts/${cartId}`)
    return response.data;
}
