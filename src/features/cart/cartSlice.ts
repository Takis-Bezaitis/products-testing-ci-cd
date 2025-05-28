import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductsType } from "../../types/productsType";
import { products } from "../../data/products";

type CartProduct = ProductsType & { quantity: number }

type CartItemsProps = {
    cartItems: number;
    cartProducts: CartProduct[];
    products: ProductsType[];
}

const initialState: CartItemsProps = {
    cartItems: 0,
    cartProducts: [],
    products: products
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state:CartItemsProps, action: PayloadAction<ProductsType>) => {
            state.cartItems +=1;
            const index = state.cartProducts.findIndex((p) => p.id === action.payload.id);
            
           if (index === -1) {
                state.cartProducts.push({ ...action.payload, quantity: 1 })
            } else {
                state.cartProducts[index].quantity +=1;                
            }

        },
        removeFromCart: (state:CartItemsProps, action: PayloadAction<ProductsType>) => {
            if (state.cartItems>=0) {
                state.cartItems -=1;
            }
            const index = state.cartProducts.findIndex((p) => p.id === action.payload.id);
            if (state.cartProducts[index].quantity>=0) {
                state.cartProducts[index].quantity -= 1;
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;