import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <a href="./api/auth/" className="login">
        Login
      </a>
    </div>
  );
};

export default Home;
