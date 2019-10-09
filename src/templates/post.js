import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.orgContent;
    const { title, date } = post.meta;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">{title}</h1>
            <p className="is-small has-text-centered">{date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    orgContent(id: { eq: $id }) {
      html
      meta {
        title
        date
      }
    }
  }
`;
