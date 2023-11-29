import { configureStore } from '@reduxjs/toolkit';
import search from '../modules/search';

const store = configureStore({
  //리듀서들
  reducer: {
    search,
  },
});

export default store;
