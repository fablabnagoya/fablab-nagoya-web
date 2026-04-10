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
       <a href="https://www.maslowcnc.com/" target="_blank">Maslow 4</a><br />幅900mm × 長さ1800mmのコンパネ(コンクリート型枠用合板)を切削加工するために使用しています。数mmの誤差があり、あまり精度は良くありません。
      </>
    ),
  },
  {
    title: 'カッティングマシン',
    image: '/img/sdx1000.jpg',
    description: (
      <>
        <a href="https://www.brother.co.jp/product/cuttingmachine/sdx1000/" target="_blank">Brother SDX1000</a><br />紙、薄い布、フェルト、PPシート（薄いプラ板）、ウレタンフォーム、シールやステッカーなどのカットができます。
      </>
    ),
  },
  {
    title: '刺繍用ミシン',
    image: '/img/skitch-pp1.jpg',
    description: (
      <>
        <a href="https://www.brother.co.jp/product/hsm/embropc/pp1/index.aspx" target="_blank">Brother SKiTCH PP1</a><br />専用アプリ『Artspira(アートスピラ)』を使って、スマートフォンやタブレットでデータ作成や編集、データ転送などを行う刺繍専用機です。
      </>
    ),
  },
  {
    title: '小型ボール盤',
    image: '/img/DP2250R.jpeg',
    description: (
      <>
        <a href="https://www.toyoas.jp/products/category/drilling/detail.html?p=1140" target="_blank">REXON DP2250R</a><br />アルミのケースを加工する目的などに使用しています。
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
