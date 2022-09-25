import type { NextPage } from 'next';
import PageLayout from './PageLayout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageLayout>
        <h1 className={styles.title}>Successible</h1>
        <p className={styles.description}>
          This is why we do what we do - its great!
        </p>
      </PageLayout>
    </div>
  );
};

export default Home;
