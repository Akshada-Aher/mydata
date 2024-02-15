import { configureStore } from '@reduxjs/toolkit';
import  ApiDataReducer from '../features/slice';

const store=
 configureStore({
    reducer: {
        Apidata: ApiDataReducer
      }
 })

export default  store;