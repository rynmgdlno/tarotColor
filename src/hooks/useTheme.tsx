import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { toggleDarkMode } from '@actions';
import { lightTheme, darkTheme } from '../globals/theme';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.ui.navigation.isDarkMode);

  const setTheme = (newTheme: object) => {
    const cssKeys = Object.keys(newTheme);
    const cssValues = Object.values(newTheme);

    cssKeys.forEach((key, i) => {
      document.documentElement.style.setProperty(key, cssValues[i]);
    });
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    if (isDarkMode) setTheme(darkTheme);
    else setTheme(lightTheme);
  }, [isDarkMode]);

  return [isDarkMode, toggleTheme] as const;
};
