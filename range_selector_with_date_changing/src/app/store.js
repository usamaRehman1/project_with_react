import { configureStore } from "@reduxjs/toolkit";
import rangeReducer from '../features/rangeSelectorSlice.js';

export const store = configureStore({
    reducer: {
        range: rangeReducer
    }
})