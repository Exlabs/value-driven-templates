export type FontFamily = 'primary' | 'secondary';

export type DeviceBreakpoint = 'mobile' | 'tablet';

export type Color =
  | 'background'
  | 'primary'
  | 'secondary'
  | 'fontPrimary'
  | 'fontSecondary'
  | 'white'
  | 'white100'
  | 'gray'
  | 'gray400'
  | 'gray300'
  | 'lightGray'
  | 'primary400'
  | 'fontPrimary100';

export interface Theme {
  fontFamily: { [key in FontFamily]: string };
  color: { [key in Color]: string };
  deviceBreakpoint: { [key in DeviceBreakpoint]: string };
}

export const theme: Theme = {
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Raleway',
  },
  deviceBreakpoint: {
    mobile: '768px',
    tablet: '1024px',
  },
  color: {
    primary: '#6246EA',
    primary400: 'rgba(98, 70, 234, 0.4)',
    secondary: '#2CB67D',
    background: '#FFFFFE',
    fontPrimary: '#094067',
    fontPrimary100: 'rgba(9, 64, 103, 0.1)',
    fontSecondary: '#5F6C7B',
    white: '#FFFFFF',
    white100: 'rgba(255, 255, 255, 0.1)',
    gray: '#72757E',
    gray300: 'rgb(114, 117, 126, 0.3)',
    gray400: 'rgba(114, 117, 126, 0.4)',
    lightGray: '#E8E8E8',
  },
};
