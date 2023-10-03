import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
    loading:false,
    token:"",
    error:"",
    success:""

}

const userSlice= createSlice({
      name: 'user',
      initialState,
      reducers:{
            resetUser:(state, action) => {
              state.error="";
              state.success="";
              state.loading=false;
              state.token="";
            },
           
      },
      extraReducers: (builder) => {
         builder
         .addCase(addUser.pending, (state,action)=>{
              state.loading=true;
              
         })
         .addCase(addUser.fulfilled, (state,{payload:{success,error}})=>{
              state.loading=false;
              if(success){
                state.success=success
              }
              if(error){
                state.error=error
              }
         })
         .addCase(addUser.rejected, (state,action)=>{
              state.error="Something went wrong with the server"
         })

         .addCase(loginUser.pending, (state,action)=>{
              state.loading=true;
              
         })
         .addCase(loginUser.fulfilled, (state,{payload:{token,msg,error}})=>{
              state.loading=false;
              if(token && msg){
                state.success=msg
                state.token=token
              }
              if(error){
                state.error=error
              }
         })
         .addCase(loginUser.rejected, (state,action)=>{
              state.error="Something went wrong with the server"
         })
      }
});

export const addUser= createAsyncThunk('addUser/signup', async(values)=>{
        const response = await fetch('/mini/users/add' , {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)

        });
        const result = await response.json();
        return result;
})

export const loginUser= createAsyncThunk('login/user', async(values)=>{
  const response = await fetch('mini/users/login', {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  })

  return await response.json();
});


export const {resetUser} = userSlice.actions;
export default userSlice.reducer;