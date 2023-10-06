import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  msg: "",
  error: "",
  cartItems: [],
  count: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetItem: (state, action) => {
      state.msg = ""
      state.error = ""

    }, 
    emptyAdd: (state, action) => {
      state.cartItems.push(action.payload);
      state.count=state.cartItems.length;
      state.msg="item added to cart"
    },
    emptyRemove: (state, action)=>{
       let newCart= state.cartItems.filter((item)=> item._id !== action.payload);
       state.cartItems=newCart;
        state.count=state.cartItems.length;
        state.msg="item removed from cart"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addItem.fulfilled, (state, { payload: { msg, count, error, cart } }) => {
      if (msg) {
        state.msg = msg;
        state.count = count;
        state.cartItems = cart;
      } else {
        state.error = error;
      }


    })
    builder.addCase(removeItem.fulfilled, (state, { payload: { msg, count, error, cart } }) => {
      if (msg) {
        state.msg = msg;
        state.count = count;
        state.cartItems = cart;
      } else {
        state.error = error;
      }


    })
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.count = action.payload.length;

    })
  }
})

export const { resetItem,emptyAdd ,emptyRemove} = cartSlice.actions;

export default cartSlice.reducer;


export const addItem = createAsyncThunk('cart/addItem', async ({ auth, item }) => {
  const response = await fetch('/mini/users/cart/additem', {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "token": auth
    },
    body: JSON.stringify(item)
  });
  return await response.json();
})


export const removeItem = createAsyncThunk('cart/removeItem', async ({ auth, id }) => {
  const response = await fetch('/mini/users/cart/removeitem', {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "token": auth
    },
    body: JSON.stringify({ id })
  });
  return await response.json();
});


export const getCartItems = createAsyncThunk('cart/getItems', async (auth) => {
  const response = await fetch('/mini/users/cartItems', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "token": auth
    }
  });
  return await response.json();
})