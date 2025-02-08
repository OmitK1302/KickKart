// This file is write the routes at one place without cluttering 
import express from 'express';
// import products from '../Data/products.js';
// import Product from '../models/productModel.js';
// import asyncHandler from '../middlewares/asynchHandler.js';
import { getProducts, getProductById } from '../controller/productController.js';

const router = express.Router();

// router.get('/', asyncHandler(async(req, res) => {
//     const products = await Product.find({});
//     res.json(products);
// }));

// router.get('/:id', asyncHandler(async(req, res) => {
//     const product = await Product.findById(req.params.id);

//     if(product){
//         return res.json(product);
//     }
//     else{
//         res.status(404);
//         throw new Error('Resource not found');
//     }
// }));

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;