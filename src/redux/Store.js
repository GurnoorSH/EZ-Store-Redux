import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlics";

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    }
});