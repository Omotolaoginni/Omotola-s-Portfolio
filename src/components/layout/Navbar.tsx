"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { LiveStatus } from './LiveStatus';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuRef = useRef<HTMLDivElement>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const sections = ['work', 'about'];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const handleWorkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/') {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#work');
    }
  }, [pathname, router]);

  const handleAboutClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#about');
    }
  }, [pathname, router]);

  const handleMobileWorkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWorkClick(e);
    closeMenu();
  }, [handleWorkClick, closeMenu]);

  const handleMobileAboutClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    handleAboutClick(e);
    closeMenu();
  }, [handleAboutClick, closeMenu]);

  const isActive = (section: string) => {
    if (pathname === '/contact' && section === 'contact') return true;
    if (pathname !== '/') return false;
    return activeSection === section;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/my-photo 2.png" alt="Omotola Oginni" width={28} height={28} className={styles.logoAvatar} />
            <span className={styles.logoText}>Omotola Oginni</span>
          </Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link 
              href="/#work" 
              className={`${styles.link} ${isActive('work') ? styles.active : ''}`}
              onClick={handleWorkClick}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              href="/#about" 
              className={`${styles.link} ${isActive('about') ? styles.active : ''}`}
              onClick={handleAboutClick}
            >
              About
            </Link>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1lXcMccUO7n-IeZgo5bYloURiSIAXE_qM/edit?usp=sharing&ouid=115004771190897078576&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Resume
            </a>
          </li>
          <li>
            <a href="https://medium.com/@OmotolaOginni" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Writing
            </a>
          </li>
          <li>
            <Link href="/contact" className={`${styles.link} ${isActive('contact') ? styles.active : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.statusWrapper}>
          <LiveStatus />
        </div>

        <div className={styles.mobileNav} ref={menuRef}>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>

          <div id="mobile-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
            <ul className={styles.mobileLinks}>
              <li>
                <Link
                  href="/#work"
                  className={`${styles.mobileLink} ${isActive('work') ? styles.mobileLinkActive : ''}`}
                  onClick={handleMobileWorkClick}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className={`${styles.mobileLink} ${isActive('about') ? styles.mobileLinkActive : ''}`}
                  onClick={handleMobileAboutClick}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1lXcMccUO7n-IeZgo5bYloURiSIAXE_qM/edit?usp=sharing&ouid=115004771190897078576&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileLink}
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@OmotolaOginni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileLink}
                  onClick={closeMenu}
                >
                  Writing
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${styles.mobileLink} ${isActive('contact') ? styles.mobileLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
