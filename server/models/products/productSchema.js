import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
         id:{type:String, required:true},
         url:{type:String, required:true},
         detailsUrl:{type:String, required:true},
         title:{type:Object, required:true},
         price:{type:Object, required:true},
         description:{type:String, required:true},
         discount:{type:String, required:true},
         tagline:{type:String, required:true}
});

const productModel=new mongoose.model('Product', productSchema);

export default productModel;