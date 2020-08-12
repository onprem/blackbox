import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer style={{ width: '100%' }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </footer>
  );
};

export default Footer;
