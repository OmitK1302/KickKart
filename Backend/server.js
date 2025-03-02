import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
// import products from './Data/products.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from "./routes/userRoutes.js";

import cookieParser from 'cookie-parser';

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

connectDB();
const port = process.env.PORT || 5000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
// These are to use the req.body().


// Cookie parser middleware
app.use(cookieParser());
// Now we can access the request.cookies.jwt


// app.get is a method in which we can pass two parameters, the first one is the path and the second one is a callback function which will be executed when the path is hit.
app.get('/', (req, res) => {
    res.send("API is running...");
});

// Here we are sending the products data as a response to the request
// app.get('/api/products', (req, res) => {
//     // res.send("/api/prouducts is running...");
//     res.json(products);
// });

// // Here we are sending one product data as a response to the request
// // params is an object that contains the parameters parsed from the URL path
// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// });


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

// app.listen will start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});