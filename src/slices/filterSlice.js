import { createSlice } from '@reduxjs/toolkit';

import makeData from '../../utils/makeData.js';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    data: makeData(10),
  },
  reducers: {
    asc: (state) => {},
    desc: (state) => {},
    display: (state) => {},
    paginate: (state) => {},
  },
});

export const { asc, desc } = filterSlice.actions;
export default filterSlice.reducer;
