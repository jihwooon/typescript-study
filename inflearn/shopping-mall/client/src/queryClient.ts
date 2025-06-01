import {
    QueryClient,
  } from '@tanstack/react-query'

  export const getQueryClient = (() => {
    let client: QueryClient| null = null;

    return () => {
        if (!client) {
            client = new QueryClient()
        }

        return client;
    }
  }
)()

type AnyObject = { [key: string]: any }
const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async ({
  method,
  path,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD',
  path:string
  body?: AnyObject
  params?: AnyObject
}) => {
  try {
    const url = `${BASE_URL}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    }

    const response = await fetch(url, fetchOptions)
    const json = await response.json()
    return json;
  } catch (error) {
    console.error(error);
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
}
