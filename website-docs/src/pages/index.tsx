import Head from "@docusaurus/Head";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Go to rnhc tutorial →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} docs`}
      description="Documentation for rnhc, a command line to help you create components, screens, navigations and even redux implementation for your react native project"
    >
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:site_name" content={siteConfig.title} />
        <meta name="og:title" content={siteConfig.title} />
        <meta
          name="description"
          content="Documentation for rnhc, a command line to help you create components, screens, navigations and even redux implementation for your react native project"
        />
        <meta
          name="og:image"
          content={`${siteConfig.baseUrl}img/rnhc-logo.png`}
        />
        <link rel="icon" href={`${siteConfig.baseUrl}img/favicon.ico`} />
      </Head>
      <HomepageHeader />
      <main>
        <img
          className={styles.logo}
          src={`${siteConfig.baseUrl}img/rnhc-logo.png`}
          alt="rnhc logo"
          width={"27%"}
        />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
