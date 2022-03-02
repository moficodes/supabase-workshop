import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Realtime',
    Svg: require('@site/static/img/supabase-logo-icon.svg').default,
    description: (
      <>
        Realtime Database for building any kind of application. Build faster and focus on your products
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/icons8-docker.svg').default,
    description: (
      <>
        Open Source and can be self hosted by anyone using docker
      </>
    ),
  },
  {
    title: 'Powered by Postgres',
    Svg: require('@site/static/img/postgresql-icon.svg').default,
    description: (
      <>
        Works with your existing postgres schema. Works with your existing SQL data.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
