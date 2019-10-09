import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allOrgContent.edges;
    const _posts = posts.map(({ node }) => {
      const title = node.meta.title || node.fields.slug;
      const date = node.meta.date || "no date";
      return (
        <div>
          <h2 className="subtitle is-6" style={{ marginBottom: "0.2em" }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h2>
          <small>{date}</small>
        </div>
      );
    });
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="tile is-ancestor is-vertical">
              <div className="tile box">
                <div className="tile is-child">
                  <p className="title">Welcome</p>
                  <p>
                    This is the home of my current and future projects. It
                    currently features a blog where thoughts and ideas are
                    written, perhaps it shall hold some new thing I am working
                    on, and such thing perhaps needs to be written down for
                    future reference.
                  </p>
                </div>
                <div className="tile is-child">
                  <img
                    src="https://1.bp.blogspot.com/-inP6Y69ZNSs/V89SfuSZ_ZI/AAAAAAAAllo/PhbMxg2f-kQLgnP8yU39Vo06EcWs7C2xQCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BNew%2BGame%2521%2B-%2BEpisode%2B10%2B-%2BUmiko%2BPuzzled.gif"
                    alt="Umiko"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" name="posts">
          <div className="container">
          <div className="tile is-ancestor is-vertical">
                <p className="title">Posts</p>
                {_posts}
              </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrgContent {
      edges {
        node {
          fields {
            slug
          }
          meta {
            title
            date
          }
        }
      }
    }
  }
`;
