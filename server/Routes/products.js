import express from 'express';
import productModel from '../models/products/productSchema.js';

const router =new express.Router();

router.get('/products' ,async (req,res)=>{
    try {
         const response = await productModel.find({});
         res.status(201).json(response);

    } catch (error) {
        res.send(error)
    }
})

router.get('/products/single/:id' ,async (req,res)=>{
    try {
        const id =req.params.id;
        const response = await productModel.findById(id);
         res.status(201).json(response);
        // console.log(response);

    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
    }
})











export default router;

