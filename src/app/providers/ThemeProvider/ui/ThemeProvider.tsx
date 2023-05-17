import {
  useMemo, useState, useEffect, ReactNode,
} from 'react';

import {
  ThemeContext,
} from '../../../../shared/libs/context/ThemeContext';

import { Theme } from '@/shared/const/Theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

const defaultTheme = localStorage.getItem(
  LOCAL_STORAGE_THEME_KEY,
) as Theme || Theme.LIGHT;

interface ThemeProvidersProps {
  initialTheme?: Theme,
  children: ReactNode
}

const ThemeProvider = (props: ThemeProvidersProps) => {
  const {
    children,
    initialTheme,
  } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>

  );
};

export default ThemeProvider;
