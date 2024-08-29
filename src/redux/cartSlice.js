import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userData: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            state.userData.push(action.payload);
            // console.log("added data to cart",action.payload);
        },
        removeAllAddCarts(state, action){
            state.userData = [];
        },
        removeItem(state, action) {
            console.log(action.payload.id)
            state.userData = state.userData.filter(item => item.id !== action.payload.id);

        }
    },
});

export const {addToCart, removeAllAddCarts, removeItem} = cartSlice.actions;
export default cartSlice.reducer;