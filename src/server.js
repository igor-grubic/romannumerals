import express from 'express';

const app = express();

app.use('/', () => true);

export default app;
