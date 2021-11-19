import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
};

export default Home;
