import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type states = {
  filteredPostsValue: 'all' | 'personal-finances' | 'debts' | 'investments';
};

export const filteredPostsSlice = createSlice({
  name: 'filteredPosts',
  initialState: {
    filteredPostsValue: 'all'
  } as states,
  reducers: {
    setFilteredPostsValue: (
      state,
      action: PayloadAction<
        'all' | 'personal-finances' | 'debts' | 'investments'
      >
    ) => {
      state.filteredPostsValue = action.payload;
    }
  }
});

export const { setFilteredPostsValue } = filteredPostsSlice.actions;
