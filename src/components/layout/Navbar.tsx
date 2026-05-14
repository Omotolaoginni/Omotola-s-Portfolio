"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo-icon.svg" 
              alt="Logo" 
              width={28} 
              height={28}
              className={styles.logoIcon}
            />
            <span>Omotola Oginni</span>
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
