import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const productFetch=createAsyncThunk('products/productSlice',
async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
const data=await res.json()
return data
})

export const productSlice = createSlice({
  name: 'products',
  initialState:[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productFetch.fulfilled, (state, action) => {
      return action.payload
    })
  },
})
export default productSlice.reducer