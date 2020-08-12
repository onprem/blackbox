import React, { FC } from 'react';
import { PageRendererProps } from 'gatsby';
// import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';
import Footer from './Footer';
import Nav, { NavProps } from './Nav';

const Layout: FC<PageRendererProps & NavProps> = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Nav location={location} title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
