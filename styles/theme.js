import { createTheme, lightThemePrimitives } from 'baseui';
const myTheme = createTheme(
  {
    ...lightThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    primaryFontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif;',
  },
  {
    // add all the theme overrides here - under the hood it uses deep merge
    animation: {
      timing100: '0.50s',
    },

    borders: {
      "buttonBorderRadius": "6px",
      "inputBorderRadius": "6px",
      "popoverBorderRadius": "6px",
      "surfaceBorderRadius": "6px"
    },
    colors: {
      "gold": "FFD942",
      "gold50": "#FFF07B",
      "gold100": "#FDEB5D",
      "gold200": "#FBE642",
      "gold300": "#FFD942",
      "gold400": "#FCC13B",
      "gold500": "#F9AA33",
      "gold600": "#F48226",
    }
  },
);

export default myTheme