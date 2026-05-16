"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(220, 85%, 55%)" />
                  <stop offset="100%" stopColor="hsl(265, 75%, 60%)" />
                </linearGradient>
              </defs>
              <rect width="28" height="28" rx="6" fill="url(#logoGradient)"/>
              <text x="14" y="19" fontFamily="sans-serif" fontSize="14" fontWeight="600" fill="#ffffff" textAnchor="middle">O</text>
            </svg>
            <span className={styles.logoText}>Omotola Oginni</span>
          </Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link 
              href="/projects" 
              className={`${styles.link} ${pathname.startsWith('/projects') ? styles.active : ''}`}
              aria-current={pathname.startsWith('/projects') ? 'page' : undefined}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
              aria-current={pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Resume
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
