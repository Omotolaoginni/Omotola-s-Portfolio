import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'article' | 'div' | 'section';
  padding?: 'normal' | 'large' | 'none';
  interactive?: boolean;
}

export const Card = ({ 
  children, 
  as: Component = 'div', 
  padding = 'normal',
  interactive = false,
  className = '', 
  ...props 
}: CardProps) => {
  const classes = `${styles.card} ${styles[`padding-${padding}`]} ${interactive ? styles.interactive : ''} ${className}`;
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
