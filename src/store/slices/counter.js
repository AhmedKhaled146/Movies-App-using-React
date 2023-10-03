import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: { counter_val: 0 },
  reducers: {
    incrementCounter: (state) => {
      state.counter_val = state.counter_val + 1;
    },
    decrementCounter: (state) => {
      if (state.counter_val > 0) {
        state.counter_val = state.counter_val - 1;
      }
    },
  },
});

export const { incrementCounter, decrementCounter } = counter.actions;
export default counter.reducer;
