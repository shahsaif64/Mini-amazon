import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import statusCode from '../../../utils/statusCode'

const initialState = {
  data: [],
  status: "idle",
  single:""
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      })
      .addCase(getSingle.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getSingle.fulfilled, (state, action) => {
        state.single = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getSingle.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      })
  }
})

// export const { addSingle } = productSlice.actions;
export default productSlice.reducer;


export const getProducts = createAsyncThunk('products/get', async () => {
  const response = await fetch('/mini/products');
  const data = await response.json();
  return data;
})

export const getSingle = createAsyncThunk('get/single', async (id) => {
    const response= await fetch(`/mini/products/single/${id}`, {
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    });
    
    return await response.json();

});