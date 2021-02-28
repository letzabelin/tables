import { combineReducers } from 'redux';

import filters, { actions as filtersActions } from './filters.js';
import pages, { actions as pagesActions } from './pages.js';
import main from './main.js';

const actions = { filtersActions, pagesActions };

export { actions };

export default combineReducers({
  filters,
  pages,
  main,
});
