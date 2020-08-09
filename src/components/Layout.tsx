import React, { FC, ReactNode } from 'react';
import { Link, PageRendererProps, withPrefix } from 'gatsby';
// import Helmet from 'react-helmet';

import { rhythm, scale } from '../utils/typography';

interface LayoutProps {
  title: string;
}

const Layout: FC<PageRendererProps & LayoutProps> = ({ location, title, children }) => {
  const rootPath = withPrefix('/');
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3 style={{ marginTop: 0 }}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
