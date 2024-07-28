import {
  Order,
  OrderListItem,
  OrderSheet,
  OrderDetailItem,
} from "../models/order.model";

const orders: OrderSheet[] = [];

export const mockOrders: Order[] = [
  {
    id: 1,
    createAt: "2024-07-28T10:30:00Z",
    address: "서울시 강남구 테헤란로 123",
    receiver: "김철수",
    contact: "010-1234-5678",
    bookTitle: "TypeScript 마스터하기",
    totalQuantity: 2,
    totalPrice: 45000,
  },
  {
    id: 2,
    createAt: "2024-07-28T11:15:00Z",
    address: "부산시 해운대구 해운대해변로 456",
    receiver: "이영희",
    contact: "010-9876-5432",
    bookTitle: "React와 함께하는 웹 개발",
    totalQuantity: 1,
    totalPrice: 35000,
  },
  {
    id: 3,
    createAt: "2024-07-28T14:00:00Z",
    address: "대전시 유성구 대학로 789",
    receiver: "박지민",
    contact: "010-1111-2222",
    bookTitle: "Node.js 백엔드 개발 가이드",
    totalQuantity: 3,
    totalPrice: 90000,
  },
  {
    id: 4,
    createAt: "2024-07-28T16:45:00Z",
    address: "인천시 연수구 컨벤시아대로 321",
    receiver: "최유진",
    contact: "010-3333-4444",
    bookTitle: "데이터 구조와 알고리즘",
    totalQuantity: 1,
    totalPrice: 40000,
  },
  {
    id: 5,
    createAt: "2024-07-28T18:30:00Z",
    address: "광주시 서구 상무중앙로 654",
    receiver: "정민수",
    contact: "010-5555-6666",
    bookTitle: "클린 코드의 비밀",
    totalQuantity: 2,
    totalPrice: 60000,
  },
];

const mockOrderDetail: OrderDetailItem[] = [
  {
    bookId: 1,
    title: "TypeScript 마스터하기",
    author: "",
    quantity: 2,
    price: 45000,
  },
];

export const mockOrder: OrderListItem[] = [
  {
    id: 1,
    createAt: "2024-07-28T10:30:00Z",
    address: "서울시 강남구 테헤란로 123",
    receiver: "김철수",
    contact: "010-1234-5678",
    bookTitle: "TypeScript 마스터하기",
    totalQuantity: 2,
    totalPrice: 45000,
    detail: mockOrderDetail,
  },
  {
    id: 2,
    createAt: "2024-07-28T11:15:00Z",
    address: "부산시 해운대구 해운대해변로 456",
    receiver: "이영희",
    contact: "010-9876-5432",
    bookTitle: "React와 함께하는 웹 개발",
    totalQuantity: 1,
    totalPrice: 35000,
    detail: mockOrderDetail,
  },
  {
    id: 3,
    createAt: "2024-07-28T14:00:00Z",
    address: "대전시 유성구 대학로 789",
    receiver: "박지민",
    contact: "010-1111-2222",
    bookTitle: "Node.js 백엔드 개발 가이드",
    totalQuantity: 3,
    totalPrice: 90000,
    detail: mockOrderDetail,
  },
  {
    id: 4,
    createAt: "2024-07-28T16:45:00Z",
    address: "인천시 연수구 컨벤시아대로 321",
    receiver: "최유진",
    contact: "010-3333-4444",
    bookTitle: "데이터 구조와 알고리즘",
    totalQuantity: 1,
    totalPrice: 40000,
    detail: mockOrderDetail,
  },
  {
    id: 5,
    createAt: "2024-07-28T18:30:00Z",
    address: "광주시 서구 상무중앙로 654",
    receiver: "정민수",
    contact: "010-5555-6666",
    bookTitle: "클린 코드의 비밀",
    totalQuantity: 2,
    totalPrice: 60000,
    detail: mockOrderDetail,
  },
];

export const order = async (orderData: OrderSheet) => {
  orders.push(orderData);

  return orderData;
};

export const fetchOrders = async () => {
  return mockOrders;
};

export const fetchOrder = async (id: number) => {
  const order = mockOrder.find((order) => order.id === id);

  return order?.detail;
};
