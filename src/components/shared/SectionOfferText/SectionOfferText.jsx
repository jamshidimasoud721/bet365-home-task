import React from 'react';
import styles from './SectionOfferText.module.css';

const SectionOfferText = ({ children, className = '' }) => {
  return (
    <p className={`${styles.sectionOfferText} ${className}`}>
      {children}
    </p>
  );
};

export default SectionOfferText;
