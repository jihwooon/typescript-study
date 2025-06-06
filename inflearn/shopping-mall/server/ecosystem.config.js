export default {
   apps: [
      {
         /* 개발 환경용 서버 */
         name: 'projectName-dev',
         script: './src/app.ts',
         instances: 1, // 단일 쓰레드
         autorestart: true,
         watch: true,
         env: {
            Server_PORT: 8080,
            NODE_ENV: 'development',
         },
      },
   ],
};
