import React from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import styles from './styles.module.css';

type Feature = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};
const Home = (): JSX.Element => {
  const context = useDocusaurusContext();
  const {
    siteConfig: {title, tagline},
  } = context;

  const features: Feature[] = [
    {
      title: 'Easy to Use',
      imageUrl: 'img/undraw_docusaurus_mountain.svg',
      description: (
        <>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </>
      ),
    },
    {
      title: 'Focus on What Matters',
      imageUrl: 'img/undraw_docusaurus_tree.svg',
      description: (
        <>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores.
          Go ahead and move your docs into the <code>docs</code> directory.
        </>
      ),
    },
    {
      title: 'Powered by React',
      imageUrl: 'img/undraw_docusaurus_react.svg',
      description: (
        <>
          Extend or customize your website layout by reusing React. Docusaurus
          can be extended while reusing the same header and footer.
        </>
      ),
    },
  ];

  const Feature = ({imageUrl, title, description}: Feature) => {
    const imgUrl = useBaseUrl(imageUrl);
    return (
      <div className={classnames('col col--4', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <div className="text--center">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <Layout
      title={`Hello from ${title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/welcome/intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};

export default Home;
