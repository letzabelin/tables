import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    order: 'base',
  },
  reducers: {
    asc: (state) => {
      state.order = 'asc';
    },
    desc: (state) => {
      state.order = 'desc';
    },
  },
});

const actions = { ...slice.actions };

export { actions };

export default slice.reducer;
