// server.js
import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import accountsRoute from './routes/accountsRoute.js';
import coursesRoute from './routes/coursesRoute.js';
import categoriesRoute from './routes/categoryRoute.js';
import cartsRoute from './routes/cartRoute.js';
import myClassesRoute from './routes/myClassRoute.js';
import purchaseHistoryRoute from './routes/purchaseHistoryRoute.js';
import adminRoute from './routes/adminRoute.js'

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
app.use('/carts', cartsRoute );
app.use('/myClasses', myClassesRoute );
app.use('/purchaseHistories', purchaseHistoryRoute );
app.use('/admin',adminRoute);


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