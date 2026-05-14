import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  href?: string;
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  href, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const classes = `${styles.button} ${styles[`variant-${variant}`]} ${className}`;

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    // If it's an internal link
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
