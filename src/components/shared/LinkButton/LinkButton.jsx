import React from 'react';
import styles from './LinkButton.module.css';

const LinkButton = ({ href = '', variant = 'yellow', className = '', title = '', ...props }) => {
  const variantClass = styles[variant] || styles.yellow;
  
  return (
    <a 
      href={href} 
      className={`${styles.btn} ${variantClass} ${className}`} 
      {...props}
    >
      {title}
    </a>
  );
};


export default LinkButton;
