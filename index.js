import dotenv from 'dotenv';
import path from 'path';
import server from './src/server.js';

dotenv.config({path: `${path.resolve()}/src/config/.env`});
const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`Adobe API listening on port ${port}!`));
