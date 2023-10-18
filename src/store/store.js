import { configureStore } from '@reduxjs/toolkit';
import coustomerSlice from './customerSlice'

export const store = configureStore({
  reducer:{
    coustomerSlice
  }
})