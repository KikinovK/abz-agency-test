import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src="./logo.svg" alt="TESTTASK" className={styles.logo__pic} />
    </a>
  );
};

export default Logo;
