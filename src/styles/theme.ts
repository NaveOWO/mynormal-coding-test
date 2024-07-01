import { DefaultTheme, css } from 'styled-components';

interface Font {
  size: number;
  weight: number;
}

const font = ({ size, weight }: Font) => {
  return css`
    font-size: ${size}rem;
    font-weight: ${weight};
  `;
};

const theme: DefaultTheme = {
  colors: {
    gray100: '#F2F2F2',
    gray200: '#C7C7CA',
    gray300: '#9E9EAE',
    black: '#000',
    white: '#fff',
    red: '#ff0000',
    red_light: '#FF8989',
  },

  fonts: {
    title: font({ size: 2.4, weight: 700 }),
    body_1: font({ size: 1, weight: 500 }),
    body_2: font({ size: 1.2, weight: 500 }),
    body_3: font({ size: 1.2, weight: 700 }),
    body_4: font({ size: 1.6, weight: 500 }),
    body_5: font({ size: 1.8, weight: 700 }),
    body_6: font({ size: 1.2, weight: 700 }),
    button_1: font({ size: 1.2, weight: 500 }),
    button_2: font({ size: 1.2, weight: 600 }),
  },
};

export default theme;
