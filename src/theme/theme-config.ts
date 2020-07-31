export type FontFamily = 'primary' | 'secondary';

export type Color =
  | 'background'
  | 'primary'
  | 'secondary'
  | 'fontPrimary'
  | 'fontSecondary';

export interface Theme {
  fontFamily: { [key in FontFamily]: string };
  color: { [key in Color]: string };
}

export const theme: Theme = {
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Raleway',
  },
  color: {
    primary: '#7F5AF0',
    secondary: '#72757E',
    background: '#242629',
    fontPrimary: '#FFFFFE',
    fontSecondary: '#94A1B2',
  },
};
