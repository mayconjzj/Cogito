import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type states = {
  financeItemValue: 'personal-finances' | 'debts' | 'investments';
};

export const financeItemSlice = createSlice({
  name: 'financeItem',
  initialState: {
    financeItemValue: 'debts'
  } as states,
  reducers: {
    setFinanceItemValue: (
      state,
      action: PayloadAction<'personal-finances' | 'debts' | 'investments'>
    ) => {
      state.financeItemValue = action.payload;
    }
  }
});

export const { setFinanceItemValue } = financeItemSlice.actions;
