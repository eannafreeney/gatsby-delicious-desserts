import React, { useState } from "react";

import FeaturedRecipes from "../components/FeaturedRecipes";
import Page from "../components/Page";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Page>
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>Please fill out the form and we will get back to you asap.</p>
          </article>
        </section>
        <FeaturedRecipes />
      </Page>
    </Layout>
  );
};

export default Contact;
