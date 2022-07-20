import React from "react";
import slugify from "slugify";

import { graphql, Link } from "gatsby";

import setupTags from "../utils/setupTags";
import Layout from "../components/Layout";
import Page from "../components/Page";
import SEO from "../components/SEO";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipes.nodes);

  return (
    <Layout>
      <SEO title="Tags" />
      <Page>
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
