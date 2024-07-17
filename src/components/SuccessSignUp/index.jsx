import Container from 'src/components/ui/Container';
import TitleSection from 'src/components/ui/TitleSection';

import styles from './SuccessSignUp.module.scss';

const SuccessSignUp = () => {
  return (
    <section className={styles.success}>
      <Container>
        <TitleSection  mods={['modMargin2']}>User successfully registered</TitleSection>
        <div className={styles.success__img}>
          <img src="./success.svg" alt="User successfully registered" />
        </div>
      </Container>
    </section>
  );
};

export default SuccessSignUp;
