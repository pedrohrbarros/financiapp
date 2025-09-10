import React from 'react';
import { create } from 'zustand'
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

export const light_theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#0F2D25',
      background: '#E6F2EF',
      surface: '#FFFFFF',
      onSurface: '#0F2D25',
      onBackground: '#0F2D25',
    },
    custom: {
      font: '#0F2D25',
      background: '#E6F2EF',
      containerBackground: '#FFFFFF',
    }
  };
  
  export const dark_theme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#E6F2EF',
      background: '#0F2D25',
      surface: '#1C4036',
      onSurface: '#E6F2EF',
      onBackground: '#E6F2EF',
    },
    custom: {
      font: '#E6F2EF',
      background: '#0F2D25',
      containerBackground: '#1C4036',
    }
  };

interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
  }

export const useTheme = create<ThemeState>((set, get) => ({
    isDark: false,
    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  }))

export const useAppTheme = () => {
  const { isDark, toggleTheme } = useTheme();
  const systemColorScheme = useColorScheme();
  
  React.useEffect(() => {
    useTheme.setState({ isDark: systemColorScheme === 'dark' });
  }, [systemColorScheme]);

  const theme = isDark ? dark_theme : light_theme;
  
  return {
    isDark,
    toggleTheme,
    theme,
  };
};