import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rangeValue: 0
}

const rangeSelectorSlice = createSlice({
    name: "range",
    initialState,
    reducers: {
        setRangeValue: (state, action) => { state.rangeValue = action.payload },
        increment: (state) => { state.rangeValue += 1 },
        decrement: (state) => {
            if (state.rangeValue == 0 || state.rangeValue < 0) {
                state.rangeValue = 0
            } else {
                state.rangeValue -= 1
            }
        },
        reset: (state) => { state.rangeValue = 0 },
    }
})

export const { setRangeValue, increment, decrement, reset } = rangeSelectorSlice.actions;
export default rangeSelectorSlice.reducer