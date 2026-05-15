import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "../features/stepSlice.js";
import countReducer from "../features/counterSlice.js";

export const store = configureStore({
    reducer: {
        step: stepReducer,
        count: countReducer,
    }
})