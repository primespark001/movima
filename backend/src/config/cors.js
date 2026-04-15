import cors from 'cors';
import {env} from './env.js';

export const corsFns = cors({
    origin: env.clientURL,
    credentials: true,
    method: ['GET', 'POST', 'PUT', 'DELETE']
});