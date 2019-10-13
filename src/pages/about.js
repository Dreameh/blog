import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { rhythm } from '../utils/typography'
import * as Lang from '../constants'

import { HOME_TITLE } from '../constants'

export default ({ data, location }) => {
  const resumes = data.allMarkdownRemark.edges
  const { siteMetadata } = data.site

  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0]

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
          3 / 4
        )}`,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: resume.html }} />
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
