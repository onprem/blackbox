import './global.css';

import Typography from 'typography';
import TypoTheme from 'typography-theme-parnassus';

const typography = new Typography(TypoTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export const { rhythm, scale } = typography;
export default typography;
