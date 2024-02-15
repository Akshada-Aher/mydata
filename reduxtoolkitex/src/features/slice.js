import { createSlice } from '@reduxjs/toolkit';
console.log("storedata")
const slice=createSlice({
  name:'da',
  initialState:{
   data:[]
  },
  reducers:{
       storedata:(state,action)=>{
        console.log("actionpayload>>>>",action.payload)
         state.data=action.payload;
         console.log("ststae",state.data)
       }
  }
})

export default slice.reducer;
 export const { storedata } = slice.actions;