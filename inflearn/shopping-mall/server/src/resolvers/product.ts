export const mockProducts = (() => Array.from({ length: 20 }, (_, index) => ({
  id: index + 1 + '',
  createdAt: new Date().toISOString(),
  imageUrl: `https://picsum.photos/id/${index+1}/640/480`,
  price: 50000,
  title: `Product ${index+1}`,
  description: `Description ${index+1}`,
  category: new Date(1234567890123+(index*1000*60)).toISOString(),
})))();

export const productResolvers = {
  Query: {
    products: () => mockProducts,
    product: (_: any, { id }: { id: string }) => {
      return mockProducts.find((product) => product.id === id);
    },
  },
}; 