import express from 'express'
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import { DBField, readDB, writeDB } from './dbController';
import resolvers from './resolvers';
import schema from './schema';

export const setJSON = (data: any) => {
  return writeDB(DBField.CART, data)
}

interface MyContext {
  db: {
    products: any[];
    cart: any[];
  };
}

(async () => {
  const port = 8000;

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  app.use(
    '/graphql',
    cors({
      origin: ['http://localhost:5173', 'https://studio.apollographql.com'],
      credentials: true
    }),
    express.json(),
    expressMiddleware(server, {
      context: async () => ({
        db: {
          products: readDB(DBField.PRODUCTS),
          cart: readDB(DBField.CART)
        }
      })
    })
  );

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  await new Promise<void>((resolve) => httpServer.listen({ port }, () => resolve()));
  console.log(`🚀 Server ready at http://localhost:${port}`);
})();
