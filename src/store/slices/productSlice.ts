import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productStateEnum } from "../../utils/productStateenum";
import axios from "axios";

const initialProductState = {
    product:[],
    status:productStateEnum.IDLE
}

const productSlice = createSlice({
  name:"product",
  initialState:initialProductState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state,action)=>{
        state.status = productStateEnum.LOADING
    })
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.product = action.payload
        state.status = productStateEnum.IDLE
    })
    builder.addCase(fetchProducts.rejected,(state,action)=>{
        state.status = productStateEnum.ERROR
    })
  }

})

export const fetchProductsAsync = createAsyncThunk("product/fetchProducts", async () => {
    const response = await axios.get('https://fake-store-api.mock.beeceptor.com/api/products')
    return response.data
})

export const fetchProducts = fetchProductsAsync
export default productSlice.reducer