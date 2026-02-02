import React from 'react';
import styles from './Header.module.css';
import bet365Logo from '../../assets/icons/bet365.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={bet365Logo} alt="bet365 logo" className={styles.logo} />
      </a>
    </header>
  );
};

export default Header;
