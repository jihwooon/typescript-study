import { Cart } from "../models/cart.model";
import { httpClient } from "./http";

interface AddCartParams {
  book_id: number;
  quantity: number;
}

const carts: Cart[] = [
  {
    id: 1,
    title: "별을 여행하는 아이",
    bookId: 1,
    summary: "별을 여행하는 이야기",
    quantity: 1,
    price: 15000,
  },
  {
    id: 2,
    title: "시간의 정원",
    bookId: 2,
    summary: "시간을 주제로 한 시집",
    quantity: 1,
    price: 12000,
  },
  {
    id: 3,
    title: "빛의 파도",
    bookId: 3,
    summary: "빛에 관한 과학적 탐구",
    quantity: 1,
    price: 22000,
  },
];

export const addCart = async (params: AddCartParams) => {
  const response = await httpClient.post("/carts", params);
  return response.data;
};

export const fetchCart = async () => {
  // const response = await httpClient.get<Cart[]>("/carts");
  return carts;
};

export const deleteCart = async (cartId: number) => {
  // const response = await httpClient.delete(`cart/${cartId}`);
  const response = carts.filter((item) => cartId !== item.id);
  return response;
};
