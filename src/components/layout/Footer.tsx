import React from 'react';
import styles from './Footer.module.css';
import { Section } from './Section';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section width="full" padding="large">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.heading}>Let's build something great.</h2>
            <a href="mailto:hello@omotola.com" className={styles.email}>
              hello@omotola.com
            </a>
          </div>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Twitter
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
};
