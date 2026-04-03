import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '3Dプリンタ',
    image: '/img/Bambu_P2S.jpeg',
    description: (
      <>
        Bambu Lab P2S
      </>
    ),
  },
  {
    title: 'レーザー加工機',
    image: '/img/AQLV-400.jpeg',
    description: (
      <>
        LASER VELOCITY AQLV-400<br />40W CO2レーザー。数ミリ厚までのMDFやアクリル板をレーザーで切削加工することができます。
      </>
    ),
  },
  {
    title: 'CNCフライス盤',
    image: '/img/3018-pro-max_1.jpg',
    description: (
      <>
        LUNYEE 3018 PRO MAX<br />
        主に基板を切削加工するために使用しています。
      </>
    ),
  },
  {
    title: '大判CNCルーター',
    image: '/img/Maslow4.jpg',
    description: (
      <>
        幅900mm × 長さ1800mmのコンパネ(コンクリート型枠用合板)を切削加工するために使用しています。数mmの誤差があり、あまり精度は良くありません。
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  const imgSrc = useBaseUrl(image);
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} role="img" alt={title} />
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
        <Heading as="h2" className={styles.sectionTitle}>工具</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
