import axios, { AxiosError, AxiosResponse } from 'axios'

interface Post { id: number, title: string, price: number, description: string, category: string }
interface Created { }
interface Data { title: string, price: number, description: string, category: string }
interface A { };

(async () => {
  try {
    const a: A = axios;
    const req = await a.get<Post>('https://fakestoreapi.com/products/1')
    const response = await a.post<Created, AxiosResponse<Created>, Data>('https://fakestoreapi.com/products', {
      title: 'bar',
      price: 109.95,
      description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'mens clothing'
    })
    console.log(req.data);
    console.log(response.data);
  } catch (error) {
    console.error((error as AxiosError).response?.data)
    if (axios.isAxiosError(error)) {
      console.error((error.response as AxiosResponse<{ messages: string }>)?.data.messages);
    }

    if (error instanceof AxiosError) {
      error.response
    }
  }
})();

