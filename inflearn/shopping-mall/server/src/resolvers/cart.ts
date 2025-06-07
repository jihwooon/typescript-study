export const mockProducts = (() => Array.from({ length: 20 }, (_, index) => ({
  id: index + 1 + '',
  createdAt: new Date().toISOString(),
  imageUrl: `https://picsum.photos/id/${index+1}/640/480`,
  price: 50000,
  title: `Product ${index+1}`,
  description: `Description ${index+1}`,
  category: new Date(1234567890123+(index*1000*60)).toISOString(),
})))();

let cartData: { [key: string]: any } = {};

export const cartResolvers = {
  Query: {
    cart: () => Object.values(cartData),
  },
  Mutation: {
    addCart: (_: any, { id }: { id: string }) => {
      const targetProduct = mockProducts.find((product) => product.id === id);
      if (!targetProduct) {
        throw new Error('상품이 없습니다.');
      }

      const newItem = {
        ...targetProduct,
        amount: (cartData[id]?.amount || 0) + 1
      };
      cartData[id] = newItem;
      return newItem;
    },
    updateCart: (_: any, { id, amount }: { id: string; amount: number }) => {
      if (!cartData[id]) {
        throw new Error('존재하지 않는 데이터입니다.');
      }

      const newItem = {
        ...cartData[id],
        amount
      };
      cartData[id] = newItem;
      return newItem;
    },
    deleteCart: (_: any, { id }: { id: string }) => {
      delete cartData[id];
      return id;
    },
    executePay: (_: any, { ids }: { ids: string[] }) => {
      ids.forEach((id) => {
        delete cartData[id];
      });
      return ids;
    },
  },
}; 