import React from "react";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home"></SEO>
      <main>
        <Hero />
        <AllRecipes />
      </main>
    </Layout>
  );
}
