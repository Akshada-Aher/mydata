import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    Addresult: 0,
     Subresult:0
  },
  reducers: {
    add: (state, action) => {
      state.Addresult = action.payload.num1 + action.payload.num2;
    },
    sub: (state,action)=>{
        state.Subresult=action.payload.num1- action.payload.num2;
    }
  }
});

export const { add, sub } = counterSlice.actions;
export default counterSlice.reducer;