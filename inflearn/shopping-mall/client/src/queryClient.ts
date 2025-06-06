import { request, type RequestDocument } from 'graphql-request';

import {
    QueryClient,
  } from '@tanstack/react-query'

  export const getQueryClient = (() => {
    let client: QueryClient| null = null;

    return () => {
        if (!client) {
          client = new QueryClient(
            {
              defaultOptions: {
                queries: {
                  gcTime: Infinity,
                  staleTime: Infinity,
                  refetchOnMount: false,
                  refetchOnReconnect: false,
                  refetchOnWindowFocus: false,
                }
              }
            }
          )
        }

        return client;
    }
  }
)()

type AnyObject = { [key: string]: any }
const BASE_URL = 'http://localhost:5173'

export const graphqlFetcher = async <T>(query: RequestDocument, variables = {}) => 
  request<T>(BASE_URL, query, variables)

export const fetcher = async ({
  method,
  path,
  params,
  body,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD',
  path:string
  body?: AnyObject
  params?: AnyObject
}) => {
  try {
    let url = `${BASE_URL}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    }

    if (params) {
      url += `?${new URLSearchParams(params).toString()}`
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body)
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
  CART: 'CART'
}
