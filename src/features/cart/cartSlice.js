import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem:(state, actions) =>{
            state.items = [...state.items, actions.payload]
        },
        deleteCartItem: (state, actions) =>{
            state.items = state.items.filter((item)=> item.id !== actions.payload)
        }
    }
})

export const {addCartItem, deleteCartItem} = cartSlice.actions

export default cartSlice.reducer