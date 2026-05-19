import React from 'react';
import styles from './Typography.module.css';

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
type VariantType = 'display-xl' | 'display' | 'h1' | 'h2' | 'h3' | 'body-xl' | 'body-lg' | 'body-large' | 'body-text' | 'small-text' | 'caption';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: VariantType;
  color?: 'primary' | 'muted' | 'inherit';
  children: React.ReactNode;
}

export const Typography = ({ 
  as: Component = 'p', 
  variant = 'body-text', 
  color = 'primary',
  className = '', 
  children,
  ...props 
}: TypographyProps) => {
  const classes = `${styles.typography} ${styles[`variant-${variant}`]} ${styles[`color-${color}`]} ${className}`;
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
