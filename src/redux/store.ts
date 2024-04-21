import { configureStore } from '@reduxjs/toolkit';

import { financeItemSlice } from './slice/finance-item';

export const store = configureStore({
  reducer: {
    financeItem: financeItemSlice.reducer
  }
});
