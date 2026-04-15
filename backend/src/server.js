import express from 'express';
import {env} from './config/env.js';
import {connectDB} from './config/db.js';
import {corsFns} from './config/cors.js';

// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const frontendPath = path.join(path.dirname(__dirname));

const app = express();

app.use(corsFns);
app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send('Movima App is running...'));


app.listen(env.port, () => console.log(`🚀 Server running on port: ${env.port}`));