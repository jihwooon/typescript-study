import express from 'express'
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import { resolvers } from './resolvers/resolvers';
import { typeDefs } from './schema/schema';
import { DBField, readDB } from './dbControlelr';

(async () => {
  const port = 8000;

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  context: {
    db: {
      products: readDB(DBField.PRODUCTS)
      cart: readDB(DBField.CART)
    }
  }

  await server.start();

  app.use(
    '/graphql',
    cors({
      origin: ['http://localhost:5173', 'https://studio.apollographql.com'],
      credentials: true
    }),
    express.json(),
    expressMiddleware(server)
  );

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  await new Promise<void>((resolve) => httpServer.listen({ port }, () => resolve()));
  console.log(`🚀 Server ready at http://localhost:${port}`);
})();
