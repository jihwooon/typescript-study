import fs from 'fs'
import { resolve } from 'path'
import { cartResolvers } from './resolvers/cart'

export enum DBField {
  CART = 'cart',
  PRODUCTS = 'proudcts'
}

const curentPath = resolve()

const filename = {
  [DBField.CART]: resolve(curentPath, 'src/db/cart.json'),
  [DBField.PRODUCTS]: resolve(curentPath, 'src/db/products.json')
}

export const readDB = (target: DBField) => {
  try {
   return JSON.parse(fs.readFileSync(filename[target], 'utf-8'))
  } catch(e) {
    console.error(e)
  }
}

export const writeDB = (target: DBField, data: any) => {
  try {
    fs.writeFileSync(filename[target], JSON.stringify(data))
  } catch(e) {
    console.error(e)
  }
}
