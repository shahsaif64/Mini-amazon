import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
         url:{type:String, required:true},
         detailsUrl:{type:String},
         title:{type:Object, required:true},
         price:{type:Object, required:true},
         description:{type:String},
         discount:{type:String, required:true},
         tagline:{type:String, required:true}
});

const productModel=new mongoose.model('Product', productSchema);

export default productModel;