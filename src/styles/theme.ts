import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { colors as importedColors } from './colors';

export const fontSize = {
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  40: '2.5rem',
  48: '3rem',
  50: '3.125rem',
  64: '4rem',
  72: '4.5rem',
};
export const colors = {
  ...importedColors,
};

export const DEFAULT_FONT_FAMILY = '"Nunito Sans","Arial",sans-serif';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
  palette: {
    common: {
      black: colors.Black,
      white: colors.White,
    },
    primary: {
      main: colors.DarkNavy,
      contrastText: colors.White,
    },
    secondary: {
      main: colors.HavelockBlue,
      contrastText: colors.White,
    },
    error: {
      main: colors.TorchRed,
      contrastText: colors.White,
    },
    text: {
      primary: colors.Black,
      secondary: colors.RiverBed,
      disabled: colors.DustyGrey,
    },
    background: {
      default: colors.White,
    },
    action: {
      disabled: colors.DustyGrey,
    },
    info: {
      main: colors.PaleBlue,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  // Set baseline width to 1920
  spacing: (factor: number) =>
    [
      '0.104vw', // 2
      '0.208vw', // 4
      '0.417vw', // 8
      '0.625vw', // 12
      '0.833vw', // 16
      '1.042vw', // 20
      '1.25vw', // 24
      '1.458vw', // 28
      '1.667vw', // 32
      '2.5vw', // 48
      '3.333vw', // 64
      '4.167vw', // 80
      '5vw', // 96
      '6.25vw', // 120p
    ][factor],
});

export default responsiveFontSizes(theme);
