import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'paginate',
  initialState: {
    currentPage: 1,
    quantity: 10,
  },
  reducers: {
    paginate: (state, { payload: { nextPage } }) => {
      state.currentPage += nextPage;
    },
    changeQuantity: (state, { payload: { newQuantity } }) => {
      state.quantity = newQuantity;
    },
  },
});

const actions = { ...slice.actions };

export { actions };

export default slice.reducer;
