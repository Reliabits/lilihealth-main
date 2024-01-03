import React, { createContext, useContext } from 'react';

import { theme, ITheme } from './theme';

export const ThemeContext = createContext({} as any);

export const ThemeProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <ThemeContext.Provider value={{ appTheme: theme }}>{children}</ThemeContext.Provider>
);

export const useTheme = (): { appTheme: ITheme; toggleTheme: () => void } =>
  useContext(ThemeContext);
