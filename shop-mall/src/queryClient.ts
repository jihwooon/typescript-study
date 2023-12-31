import { QueryClient } from 'react-query'

type AnyOBJ = { [key: string]: unknown }

export const getClient = (() => {
  let clinet: QueryClient | null = null;
  return () => {
    if (!clinet) clinet = new QueryClient({

    })
    return clinet;
  }
})()

const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async ({
  method,
  path,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  body?: AnyOBJ
  params?: AnyOBJ
}) => {
  try {
    const url = `${BASE_URL}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL
      }
    }

    const res = await fetch(url, fetchOptions)
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
}