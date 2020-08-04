import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
import cors from 'cors';
import models from './db';
import morgan from 'morgan';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import mongoSanitize from 'express-mongo-sanitize';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(morgan('dev'));
app.use(mongoSanitize());
app.use(passport.initialize());
app.use(urlencoded({ extended: true }));

// Test if server is running
app.get('/', (req, res) => {
  res.json({ ok: true });
});
