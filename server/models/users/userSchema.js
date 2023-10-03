import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    fname:{type:String, required:true,trim:true},
    email:{type:String, required:true, unique:[true]},
    mobile:{type:Number, required:true, unique:true, min:[999999999,'Must be 10 digits, got {VALUE}'],max:[10000000000,'Must be 10 digits, got {VALUE}']},
    password:{type:String, required:true},
    cart:{type:Array,default:[]}
});

const userModel=new mongoose.model('User', userSchema);

export default userModel;