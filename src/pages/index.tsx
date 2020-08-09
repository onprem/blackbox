import React, { FC } from 'react';

import Layout from '../components/Layout';
import { PageProps, graphql } from 'gatsby';

interface Query {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Home: FC<PageProps<Query>> = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <h2>Hello World</h2>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   edges {
    #     node {
    #       excerpt
    #       fields {
    #         slug
    #       }
    #       frontmatter {
    #         date(formatString: "MMMM DD, YYYY")
    #         title
    #         description
    #       }
    #     }
    #   }
    # }
  }
`;
