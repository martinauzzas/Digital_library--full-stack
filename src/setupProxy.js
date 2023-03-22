// import { createProxyMiddleware } from 'http-proxy-middleware';


// function app ( ) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:5173/dashboard',
//       changeOrigin: true,
//     })
//   );
// };

// export default app

// import { Express } from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// export default function configureProxy(app: Express) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
// }