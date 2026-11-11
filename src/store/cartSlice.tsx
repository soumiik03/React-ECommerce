import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: number;
    title: string;
    price: number;
    image: string;
    brand?: string;
};

export type CartState = {
    cartItems: CartItem[];
};

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<CartItem>) => {
            state.cartItems.push(action.payload);
        },
        removeItems: (state) => {
            state.cartItems.pop();
        },
        clearItems: (state) => {
            state.cartItems.length = 0;
        },
    },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;