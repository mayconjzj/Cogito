import { configureStore } from '@reduxjs/toolkit';

import { filteredPostsSlice } from './slice/filtered-posts';
import { financeItemSlice } from './slice/finance-item';

export const store = configureStore({
  reducer: {
    financeItem: financeItemSlice.reducer,
    filteredPosts: filteredPostsSlice.reducer
  }
});
