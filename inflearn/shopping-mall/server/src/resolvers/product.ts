import { DBField, writeDB } from '../dbController';
import { Resolver } from "./types";
import { v4 as uuid} from 'uuid'

export const setJSON = (data: any) => {
  return writeDB(DBField.PRODUCTS, data)
}

export const productResolvers: Resolver = {
  Query: {
    products: (parent, { cursor = '', showDeleted = false }, { db }) => {
      const filteredDB = showDeleted ? db.products : db.products.filter((product) => !!product.createdAt)
      const findIndex = db.products.findIndex((product) => product.id === cursor);
      if (findIndex === -1) {
        return [];
      }

      return filteredDB.slice(findIndex + 1, findIndex + 15);
    },
    product: (parent, { id }, { db }) => {
      const found = db.products.find((product: any) => product.id === id);
      if (!found) {
        throw new Error(`Product가 존재하지 않습니다.`);
      }

      return found;
    },
  },
  Mutation: {
    addProduct: (parent, { imageUrl, price, title, description}, { db }) => {
      const newProduct = {
        id: uuid(),
        imageUrl,
        price,
        title,
        description,
        createAt: Date.now()
      }

      db.products.push(newProduct)
      setJSON(db.products)
      return newProduct
    },
    updateProduct : (parent, {id, ...data}, { db }) => {
      const existProductIndex = db.products.findIndex((item) => item.id === id)
      if (existProductIndex < 0) {
        throw new Error('없는 상품입니다.')
      }

      const updatedItem = {
        ...db.products[existProductIndex],
        ...data,
      }

      db.products.splice(existProductIndex, 1, updatedItem)

      setJSON(db.products)
      return updatedItem
    },
    deleteProduct: (parent, { id }, { db }) => {
      const existProductIndex = db.products.findIndex((item) => item.id === id)
      if (existProductIndex < 0) {
        throw new Error('없는 상품입니다.')
      }

      const updatedItem = {
        ...db.products[existProductIndex],
      }
      delete updatedItem.createdAt
      db.products.splice(existProductIndex, 1, updatedItem)
      setJSON(db.products)
      return id
    }
  }
}; 
