import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroOverlay}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            ファブラボ名古屋は名古屋市中村区にある市民のための「ものづくり工房」です。
          </p>
        </div>
      </div>
    </header>
  );
}

function StatusSection() {
  return (
    <section className={styles.statusSection}>
      <div className="container">
        <div className={styles.statusBox}>
          <Heading as="h2">お知らせ</Heading>
          <p>
            現在、ファブラボ名古屋は準備段階です。工作機械の設置とSeeed株式会社との間の仕切りの設置を行っています。
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutFabLabSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>FabLabとは</Heading>
        <div className={styles.aboutContent}>
          <p>
            FabLab（ファブラボ）は、個人による自由なものづくりの可能性を広げるための、デジタル工作工房です。
            「ほぼあらゆるもの（Almost Anything）をつくる」ことをその活動の目標に掲げ、
            3Dプリンターやカッティングマシンなど多様なデジタル工作機械を備え、
            市民が自由にものづくりを行える環境を提供しています。
          </p>
          <p>
            FabLabは、マサチューセッツ工科大学（MIT）のニール・ガーシェンフェルド教授が始めたプロジェクトから発展し、
            現在では世界120カ国、2,300カ所以上に広がるグローバルなネットワークとなっています。
            「つくる人」と「使う人」の分断を解消し、誰もがクリエイターになれる社会の実現を目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}

function FabAcademySection() {
  const bannerSrc = useBaseUrl('/img/fab_academy_banner.png');
  return (
    <section className={styles.academySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Fab Academy</Heading>
        <div className={styles.academyBanner}>
          <a href="https://fabacademy.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={bannerSrc}
              alt="Fab Academy"
              className={styles.academyBannerImg}
            />
          </a>
        </div>

        <div className={styles.academyColumns}>
          <div className={styles.academyColumn}>
            <Heading as="h3">Fab Academyとは</Heading>
            <p>
              Fabアカデミーは、ペースの速い実践的な学習体験で、
              学生は毎週新しいプロジェクトを計画して実行することでラピッドプロトタイピングを学習し、
              技術スキルの個人ポートフォリオを作成します。
              ファブラボ名古屋はFab Academy（ファブアカデミー）の開講ラボです。
            </p>
          </div>
          <div className={styles.academyColumn}>
            <Heading as="h3">Fab Academyの生徒になるには</Heading>
            <p>
              Fab Academyには誰でも参加できます。参加資格を得るには、上記のバナーからFab AcademyのWebサイトを開き、
              オンラインフォームに必要事項を記入してコースに登録し、
              アカデミーを開講しているFabLabのリストからノード（例えば名古屋であればNagoya）を選択します。
            </p>
          </div>
          <div className={styles.academyColumn}>
            <Heading as="h3">受講料</Heading>
            <p>
              Fab Academyの標準的な受講料は5,000米ドルです。
              FabLab Nagoyaでの受講料も標準と同額の5,000米ドルをお願い致します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section className={styles.accessSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>アクセス</Heading>
        <div className={styles.accessContent}>
          <div className={styles.accessInfo}>
            <p className={styles.address}>
              〒453-0856 愛知県名古屋市中村区並木1丁目183 Seeed株式会社 内
            </p>
          </div>
          <div className={styles.accessMap}>
            <iframe src="https://www.google.com/maps/embed/v1/place?q=Seeed%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE&amp;language=ja&amp;zoom=16&amp;maptype=roadmap&amp;key=AIzaSyCucBnVrKinLowf5-ChLoxp-jjWZ82TuTU" frameborder="0" marginwidth="0" marginheight="0" width="100%" height="450px"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="FabLab Nagoya"
      description="ファブラボ名古屋は名古屋市中村区にある市民のための「ものづくり工房」です。">
      <HomepageHeader />
      <main>
        <StatusSection />
        <AboutFabLabSection />
        <FabAcademySection />
        <AccessSection />
      </main>
    </Layout>
  );
}
