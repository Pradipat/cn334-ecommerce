import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { accounts } from './models/accountModel.js';
import accountsRoute from './routes/accountsRoute.js'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/accounts', accountsRoute );

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