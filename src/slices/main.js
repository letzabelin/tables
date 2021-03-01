import { createSlice } from '@reduxjs/toolkit';

import makeData from '../utils/makeData.js';

const slice = createSlice({
  name: 'main',
  initialState: {
    data: makeData(20),
  },
  reducers: {},
});

export default slice.reducer;
