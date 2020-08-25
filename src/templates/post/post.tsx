import React, { FC } from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';

import Bio from '../../components/Bio';
import SEO from '../../components/SEO';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { rhythm, scale } from '../../utils/typography';
import styles from './post.module.css';
import LinkIcon from '../../../content/assets/link.svg';

const BlogPostTemplate: FC<PageProps<any, any>> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <div className={styles.container}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <header className={styles.header} style={{ background: post.frontmatter.accent || undefined }}>
        <Nav location={location} title={siteTitle} />
        <Img
          className={styles.headerImg}
          alt="header for this blog post"
          fluid={post.frontmatter.headerImg.childImageSharp.fluid}
        />
        <h1 style={{ ...scale(1.2), marginTop: rhythm(1), marginBottom: 0, textAlign: "center" }}>{post.frontmatter.title}</h1>
        <p style={{ display: `block`, marginTop: rhythm(1), marginBottom: rhythm(1) }}>{post.frontmatter.date}</p>
        <button className={styles.linkBtn} onClick={() => navigator.clipboard.writeText(location.href)}>
          <LinkIcon height={rhythm(1)} />
        </button>
      </header>
      <article className={styles.article}>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ marginBottom: rhythm(1) }} />
        <footer>
          <Bio />
        </footer>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Footer />
      </article>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        accent
        headerImg {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid
              # ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;
