import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        stepInc: (state) => {
            state.value += 1;
        },

        stepDec: (state) => {
            if (state.value == 0) {
                state.value = 0
            } else {
                state.value -= 1;
            }
        },
    }
})

export const { stepInc, stepDec } = stepSlice.actions;
export default stepSlice.reducer;