import React from 'react';
import styles from './NewCustomerSection.module.css';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import SectionOfferText from '../shared/SectionOfferText/SectionOfferText';
import LinkButton from '../shared/LinkButton/LinkButton';

const NewCustomerSection = () => {
  return (
    <section 
      className={styles.newCustomerSection}>
      <div className={styles.newCustomerContent}>
        <SectionTitle title="New Customer" />
        <SectionOfferText>
          Great things 
          <br/>
          are waiting
        </SectionOfferText>
        <p className={styles.newCustomerSubText}>
          Become a member and discover all that awaits
        </p>
        <LinkButton href="#" variant="green" title="Join now" />
        <p className={styles.footerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      
    </section>
  );
};

export default NewCustomerSection;
