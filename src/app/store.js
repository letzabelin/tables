import { configureStore } from '@reduxjs/toolkit';

import filterSlice from '../features/filter/filterSlice.js';

export default configureStore({
  reducer: filterSlice,
});
