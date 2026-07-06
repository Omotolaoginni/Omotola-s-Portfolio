"use client";

import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { LiveStatus } from './LiveStatus';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleWorkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/') {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#work');
    }
  }, [pathname, router]);

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
            <a 
              href="/#work" 
              className={styles.link}
              onClick={handleWorkClick}
            >
              Work
            </a>
          </li>
          <li>
            <Link href="/#about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1lXcMccUO7n-IeZgo5bYloURiSIAXE_qM/edit?usp=sharing&ouid=115004771190897078576&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Resume
            </a>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.statusWrapper}>
          <LiveStatus />
        </div>
      </nav>
    </header>
  );
};
