import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fab Academyとは',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fabアカデミーは、ペースの速い実践的な学習体験で、学生は毎週新しいプロジェクトを計画して実行することでラピッドプロトタイピングを学習し、技術スキルの個人ポートフォリオを作成します。
      </>
    ),
  },
  {
    title: 'Fab Academyとは',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fabアカデミーは、ペースの速い実践的な学習体験で、学生は毎週新しいプロジェクトを計画して実行することでラピッドプロトタイピングを学習し、技術スキルの個人ポートフォリオを作成します。
      </>
    ),
  },
  {
    title: 'Fab Academyとは',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fabアカデミーは、ペースの速い実践的な学習体験で、学生は毎週新しいプロジェクトを計画して実行することでラピッドプロトタイピングを学習し、技術スキルの個人ポートフォリオを作成します。
      </>
    ),
  },
  {
    title: 'Fab Academyとは',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fabアカデミーは、ペースの速い実践的な学習体験で、学生は毎週新しいプロジェクトを計画して実行することでラピッドプロトタイピングを学習し、技術スキルの個人ポートフォリオを作成します。
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
