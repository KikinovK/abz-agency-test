import Container from 'src/components/ui/Container';
import Button from 'src/components/ui/Button';
import Logo from 'src/components/Logo';

import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__row}>
          <div className={styles.header__logo}>
            <Logo />
          </div>
          <nav className={styles.header__nav}>
            <Button type="button" mods={['modColorPrime', 'modeSize']}>Users</Button>
            <Button type="button" mods={['modColorPrime', 'modeSize']}>Sign up</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
