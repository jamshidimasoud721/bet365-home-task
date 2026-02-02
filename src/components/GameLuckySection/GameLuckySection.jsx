import React from 'react';
import styles from './GameLuckySection.module.css';
import LinkButton from '../shared/LinkButton/LinkButton';
import logo from '../../assets/icons/GamesLuckySpadesLogo.svg';
import spadeIcon from '../../assets/icons/GamesLuckySpadesSpade.svg';
import ovalBg from '../../assets/images/GamesLuckySpadesOvalx2.png';
import greyLine from '../../assets/images/GamesLuckySpadesGreyLinex2.png';

const GameLuckySection = () => {
  return (
    <section
      className={styles.gameLuckySection}>
      <div className={styles.luckyLogoContainer}>
        <img src={greyLine} alt="" aria-hidden="true" />
        <img src={logo} alt="Lucky Spades logo" className={styles.luckyLogo} />
        <img src={greyLine} alt="" aria-hidden="true" />
      </div>

      <div className={styles.jackpotWrapper}>
        <div className={styles.jackpotContainer}>
          <img src={spadeIcon} className={styles.spadeIcon} alt="" aria-hidden="true" />
         <div className={styles.jackpotContent}>
           <div className={styles.ovalContainer}>
            <img src={ovalBg} alt="" aria-hidden="true" />
            <span className={styles.ovalLabel}>Jackpot</span>
          </div>
          <span className={styles.jackpotAmount}>£540,6754</span>
         </div>

        </div>

        <div className={styles.amountLine}>
        </div>
      </div>

      <div className={styles.minorWrapper}>
        <div className={styles.minorContainer}>
          <div className={styles.minorContent}>
            <div className={styles.ovalContainer}>
            <img src={ovalBg} alt="" aria-hidden="true" />
            <span className={styles.ovalLabel}>Minor</span>
          </div>
          <span className={styles.minorAmount}>£660.70</span>

          </div>
          <img src={spadeIcon} className={styles.spadeIcon} alt="" aria-hidden="true" />
        </div>

        <div className={styles.amountLine}>
        </div>
      </div>

      <div className={styles.miniWrapper}>
        <div className={styles.miniContainer}>
          <div className={styles.miniContent}>
            <div className={styles.ovalContainer}>
            <img src={ovalBg} alt="" aria-hidden="true" />
            <span className={styles.ovalLabel}>MINI</span>
          </div>
          <span className={styles.miniAmount}>£5.50</span>

          </div>
          <img src={spadeIcon} className={styles.spadeIcon} alt="" aria-hidden="true" />
        </div>

        <div className={styles.amountLine}>
        </div>
      </div>

        <LinkButton href="#" variant="green" title="Play Now" />
    </section>
  );
};

export default GameLuckySection;
