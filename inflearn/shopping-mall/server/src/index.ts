import express from 'express'
import cors from 'cors';
import { ApolloServer } from '@apollo/server';

(async () => {
  // const server = new ApolloServer(null);
  const port = 3000

  const app = express()
  // await server.start()

  // CORS 설정 옵션
  const corsOptions = {
    origin: ['http://localhost:3000'], // 허용할 도메인
    credentials: true, // 쿠키 포함 요청 허용
  };

  // 전역 CORS 설정
  app.use(cors(corsOptions));

  // 특정 경로에 대한 CORS 설정
  app.use('/graphql',
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    }),
    express.json(),
  );

  app.get('/', (req, res) => {
     res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})()
