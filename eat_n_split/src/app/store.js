import { configureStore } from "@reduxjs/toolkit";
import friednReducer from "../features/friendsSlipce.js"

export const store = configureStore({
    reducer: {
        friends: friednReducer,
    }
})