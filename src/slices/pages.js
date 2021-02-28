import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'paginate',
  initialState: {
    currentPage: 1,
    quantity: 10,
  },
  reducers: {
    paginate: (state, { nextPage, newQuantity }) => {
      state.currentPage = nextPage;
      state.quantity = newQuantity;
    },
  },
});

const actions = { ...slice.actions };

export { actions };

export default slice.reducer;
