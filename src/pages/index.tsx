import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Bio from '../components/Bio';

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
      <SEO title="All posts" />
      <Bio />
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
