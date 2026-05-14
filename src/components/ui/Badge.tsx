import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Badge = ({ children, className = '', ...props }: BadgeProps) => {
  return (
    <span className={`${styles.badge} ${className}`} {...props}>
      {children}
    </span>
  );
};
