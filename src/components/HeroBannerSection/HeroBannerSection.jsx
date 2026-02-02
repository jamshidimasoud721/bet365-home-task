import React from 'react';
import styles from './HeroBannerSection.module.css';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import SectionOfferText from '../shared/SectionOfferText/SectionOfferText';
import LinkButton from '../shared/LinkButton/LinkButton';
import heroBg from '../../assets/images/OffersHeroBanner.jpg';

const HeroBannerSection = () => {   
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <img src={heroBg} alt="Image of hero banner" className={`${styles.heroImage} ${styles.fadeImage}`} />
      </div>
      
      <div className={styles.heroContent}>
          <SectionTitle title="Football Betting" />
          <SectionOfferText>2 Goals<br/>Ahead Early<br/>Payout Offer</SectionOfferText>
          <LinkButton href="#" variant="yellow" title="View All Offers" />
      </div>
    </section>
  );
};

export default HeroBannerSection;
