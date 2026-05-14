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
            Omotola Oginni
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
        </ul>
      </nav>
    </header>
  );
};
