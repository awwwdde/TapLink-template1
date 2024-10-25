// Footer.js
import React from 'react';
import styles from './footer.module.scss';
import logo from '../../graphics/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerBlock}>
            <div className={styles.footerBlockImage}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.footerText}>
                made by <a href="https://github.com/awwwdde" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>awwwdde.</a> 2024
            </div>
        </div>
    </footer>
  );
};

export default Footer;