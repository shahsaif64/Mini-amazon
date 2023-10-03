import productsData from "./constant/productsdata.js"; 
import productModel from './models/products/productSchema.js'

 const defaultData= async () => {
    try {
        await productModel.deleteMany({});
        const response = await productModel.insertMany(productsData);
        // console.log(response);
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

export default defaultData;