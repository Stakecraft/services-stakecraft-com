import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain Snapshots',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We are managing snapshot service for the projects that we are really believe in.
        Validator node is a core component in every POS network. The snapshot can help
        to quickly bootstrap a new validator.
      </>
    ),
  },
  {
    title: 'RPC Endpoints',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        RPC node is a very important infrastructure element in every ecosystem. 
        Transaction sendings, data indexing and data querying couldn't be handled
        without this type of nodes.
      </>
    ),
  },
  {
    title: 'Relayers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        IBC transactions are a core feature in cosmos based networks. 
        By providing relayers for the networks we are helping to keep the 
        interchain transactions more robust.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
