'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
});

export default theme;
