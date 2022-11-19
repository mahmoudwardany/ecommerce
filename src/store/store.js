import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/cartSlice'
import productSlice from '../feature/productSlice'
 export const store = configureStore({
    reducer: {
      products:productSlice,
      cart:cartSlice,
     
    },
})
  


    