import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        countInc: (state) => {
            state.value += 1;
        },

        countDec: (state) => {
            if (state.value == 0) {
                state.value = 0
            } else {
                state.value -= 1;
            }
        },
    }
})

export const { countInc, countDec } = counterSlice.actions;
export default counterSlice.reducer;