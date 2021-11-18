import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <a href="./api/auth/login" className="login">
        Login
      </a>
      <a href="./api/auth/logout" className="login">
        Logout
      </a>
    </div>
  );
};

export default Home;
