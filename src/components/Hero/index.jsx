import Container from 'src/components/ui/Container';
import Button from 'src/components/ui/Button';
import TitleSection from 'src/components/ui/TitleSection';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <picture className={styles.hero__pic}>
          <source srcSet="
            ./hero/hero@1x.webp 1x,
            ./hero/hero@2x.webp 2x"
            type="image/webp"
            media="(min-width: 769px)" />
          <source srcSet="
            ./hero/hero@1x.jpg 1x,
            ./hero/hero@2x.jpg 2x"
            type="image/jpeg"
            media="(min-width: 769px)" />
          <source srcSet="
            ./hero/hero-768px@1x.webp 1x,
            ./hero/hero-768px@2x.webp 2x"
            type="image/webp"
            media="(max-width: 768px)" />
          <source srcSet="
            ./hero/hero-768px@1x.jpg 1x,
            ./hero/hero-768px@2x.jpg 2x"
            type="image/jpeg"
            media="(max-width: 768px)" />

          <img src="./hero/hero@1x.jpg" alt="Hero" />
        </picture>
        <div className={styles.hero__wrap}>
          <div className={styles.hero__content}>
            <TitleSection tag="h1" mods={['modMargin1']}>Test assignment for front-end developer</TitleSection>
            <p className={styles.hero__text}> What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <div className={styles.hero__button_wrap}>
              <Button href="sign_up" mods={['modColorPrime', 'modeSize']}>Sign up</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
