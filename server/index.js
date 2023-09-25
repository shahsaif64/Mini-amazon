import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './Routes/products.js';






//CONFIGURATION
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES

app.use('/mini' ,productRouter);





app.use('*' ,(req,res)=>{
    res.send("Page not found!");
});


//MONGOOSE SETUP
const DB_URL=process.env.DB_URL;
const PORT= process.env.PORT;

mongoose.connect(DB_URL, {useNewUrlParser: true,useUnifiedTopology: true,})
.then(()=>{console.log("connected to DB"), app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`)})})
.catch((err)=>{console.error(err)});