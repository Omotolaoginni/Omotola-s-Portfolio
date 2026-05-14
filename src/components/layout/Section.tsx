import React from 'react';
import styles from './Section.module.css';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  width?: 'reading' | 'full';
  padding?: 'normal' | 'large' | 'none';
}

export const Section = ({ 
  children, 
  width = 'full', 
  padding = 'normal',
  className = '',
  ...props 
}: SectionProps) => {
  return (
    <section 
      className={`${styles.section} ${styles[`padding-${padding}`]} ${className}`} 
      {...props}
    >
      <div className={`${styles.container} ${styles[`width-${width}`]}`}>
        {children}
      </div>
    </section>
  );
};
