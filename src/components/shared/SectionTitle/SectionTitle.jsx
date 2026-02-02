import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, className }) => {
  return <h1 className={`${styles.sectionTitle} ${className}`}>{title}</h1>;
};

export default SectionTitle;
