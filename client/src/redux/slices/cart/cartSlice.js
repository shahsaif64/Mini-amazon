import {createSlice} from '@reduxjs/toolkit'

const initialState = [];

const cartSlice= createSlice({
      name: 'cart',
      initialState,
      reducers: {
        addItem: (state, action)=>{
            state.push(action.payload);
        },
        removeItem: (state, action)=>{
            return state.filter((item)=> item._id !== action.payload);
        },
      },
})

export const {addItem,removeItem} = cartSlice.actions;

export default cartSlice.reducer;
