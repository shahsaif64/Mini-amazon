import express from 'express';
import productModel from '../models/products/productSchema.js';

const router = express.Router();

router.get('/products' , (req,res)=>{
    res.send("routes working");
})











export default router;

