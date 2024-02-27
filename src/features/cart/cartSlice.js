import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem:(state, actions) =>{
            state.items = [...state.items, actions.payload]
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price, 0)
        },
        deleteCartItem: (state, actions) =>{
            state.items = state.items.filter((item)=> item.id !== actions.payload)
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price, 0)
        }
    }
})

export const {addCartItem, deleteCartItem} = cartSlice.actions

export default cartSlice.reducer