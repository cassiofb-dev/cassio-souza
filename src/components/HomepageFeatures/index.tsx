import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Brazilian Fullstack Developer',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        Hello there! My name is Cássio Fernando and I'm a Fullstack Dev based at Brazil.
        Hope you like my Blog and Tutorials!
      </>
    ),
  },
  {
    title: 'Frontend Expert',
    Svg: require('@site/static/img/undraw_frontend.svg').default,
    description: (
      <>
        4 Years of experience in the most used frontend frameworks like
        Angular, Boostrap, Jquery and React.
      </>
    ),
  },
  {
    title: 'Backend Expert',
    Svg: require('@site/static/img/undraw_backend.svg').default,
    description: (
      <>
        4 Years of experience in the most used backend frameworks like
        Express, FastAPI, Laravel, and NestJS.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <p className={styles.featureHeading}>
          {title}
        </p>
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
