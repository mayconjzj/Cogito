'use client';

import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </Provider>
  );
};
