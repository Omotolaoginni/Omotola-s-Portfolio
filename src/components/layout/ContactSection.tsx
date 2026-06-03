import React from 'react';
import { Section } from './Section';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  id?: string;
  className?: string;
}

export const ContactSection = ({ id, className = '' }: ContactSectionProps) => {
  return (
    <Section id={id} width="full" padding="none" className={`${styles.contactSection} ${className}`}>
      <div className={styles.contactMarquee}>
        <div className={styles.contactMarqueeTrack}>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
          <span className={styles.contactMarqueeText}>Let&apos;s work together</span>
          <span className={styles.contactMarqueeDot}>•</span>
        </div>
      </div>
      <div className={styles.contactCta}>
        <Button href="mailto:patience.oginni@gmail.com" variant="primary">Contact Me</Button>
      </div>
      <div className={styles.contactGrid}>
        <div className={styles.contactLinks}>
          <div className={styles.contactSocials}>
            <a href="https://www.behance.net/omotolaolatejuoginni" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Behance</a>
            <a href="https://www.linkedin.com/in/omotolaolatejuoginni/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
            <a href="https://docs.google.com/document/d/1aBhZ6sg49tFvuqVxjYqIfrH2tpYkNEadeubp_Ez4Hzo/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Resume</a>
          </div>
          <a href="mailto:patience.oginni@gmail.com" className={`${styles.contactLink} ${styles.contactLinkEmail}`} aria-label="Send email to patience.oginni@gmail.com">hello@omotola.com</a>
        </div>
        <div className={styles.contactMessage}>
          <Typography as="p" variant="body-lg" color="inherit" className={styles.contactCtaText}>
            Currently open to new roles and projects.<br />
            If you&apos;re building something meaningful and need a product designer to sweat the details, I would love to be part of the conversation.
          </Typography>

          <a href="#" className={styles.backToTop} aria-label="Scroll to top of page">
            Back to top ↑
          </a>
        </div>
      </div>
    </Section>
  );
};
