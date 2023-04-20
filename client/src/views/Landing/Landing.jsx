import styles from './Landing.module.css';
import { useState, useEffect } from 'react';

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.landing}>
      {loading ? (
        <div className={styles.spinner}>
          <div className={styles.bounce1}></div>
          <div className={styles.bounce2}></div>
          <div className={styles.bounce3}></div>
          
        </div>
      ) : (
        <div className={styles.content}>
          <h1>Welcome to My Landing Page</h1>
          <button className={styles.button}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default Landing;
