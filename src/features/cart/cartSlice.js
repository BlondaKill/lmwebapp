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

            const existsItem = state.items.some((item) => item.id === actions.payload.id)
            if (!existsItem){
                state.items = [...state.items, {...actions.payload}]
            }else{
                state.items = state.items.map((item) => {
                    if(item.id === actions.payload.id){
                        return {...item, quantity: item.quantity + actions.payload.quantity}
                    }
                    return item
                })
            }
            
            state.total = state.items.reduce((acc, item)=> acc = acc + (item.price * item.quantity), 0)
        },
        deleteCartItem: (state, actions) =>{
            state.items = state.items.filter((item)=> item.id !== actions.payload)
            state.total = state.items.reduce((acc, item)=> acc = acc + item.price, 0)
        }
    }
})

export const {addCartItem, deleteCartItem} = cartSlice.actions

export default cartSlice.reducer