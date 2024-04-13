// server.js
import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import accountsRoute from './routes/accountsRoute.js';
import coursesRoute from './routes/coursesRoute.js';
import categoriesRoute from './routes/categoryRoute.js';
import imageRoute from './routes/imageRoute.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/accounts', accountsRoute );
app.use('/courses', coursesRoute );
app.use('/categories', categoriesRoute );
app.use('/images', imageRoute); 

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });
    })
    .catch((error) => {
        console.log(error);
    });