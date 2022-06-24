import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    description: (
      <>
        <code>rnhc</code> was designed to make your development process easier
        for your react native project.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    description: (
      <>
        <code>rnhc</code> lets you focus on your code more than on the project
        structure itself.
      </>
    ),
  },
  {
    title: "Easy to Learn",
    description: (
      <>
        <code>rnhc</code> is easy to learn and you can learn it in a few
        minutes.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
