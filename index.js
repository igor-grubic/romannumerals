import dotenv from 'dotenv';
import path from 'path';
import server from './src/server.js';

dotenv.config({path: `${path.resolve()}/src/config/.env`});

server.listen(process.env.PORT, () =>
  console.log(`Adobe API listening on port ${process.env.PORT}!`),
);
