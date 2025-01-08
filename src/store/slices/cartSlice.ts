import { createSlice } from "@reduxjs/toolkit";

const initialCartState: any[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter((item: any) => item.product_id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions 
export default cartSlice.reducer