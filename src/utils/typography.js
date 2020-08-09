import './global.css';

import Typography from 'typography';
import Kirkham from 'typography-theme-kirkham';

const typography = new Typography(Kirkham);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export const { rhythm, scale } = typography;
export default typography;
