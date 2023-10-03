import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    watchlist: [],
    watchlistCount: 0,
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const existingItem = state.watchlist.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.watchlist.push({ ...action.payload });
        state.watchlistCount += 1;
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (item) => item.id !== action.payload.id
      );
      state.watchlistCount -= 1;
    },

    clearWatchList: (state) => {
      state.watchlist = [];
    },
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  clearWatchList,
} = cartSlice.actions;

export default cartSlice.reducer;
