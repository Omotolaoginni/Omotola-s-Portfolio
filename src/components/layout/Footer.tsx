import React from 'react';
import styles from './Footer.module.css';
import { Section } from './Section';
import { Typography } from '../ui/Typography';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Section width="full" padding="none">
        <div className={styles.content}>
          <Typography as="span" variant="caption" color="muted">
            &copy; {year} Omotola Oginni. Built with Next.js.
          </Typography>
        </div>
      </Section>
    </footer>
  );
};
