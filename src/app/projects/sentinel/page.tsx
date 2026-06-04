import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sentinel Landing Page Redesign — Omotola Oginni",
  description:
    "A monitoring service that tracks third-party software and API uptime in real time, helping engineering teams detect outages early and receive instant alerts through their preferred notification channels.",
};

export default function SentinelProject() {
  return (
    <div className={styles.page}>
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Sentinel Landing Page Redesign
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            A redesigned landing experience for a third-party monitoring platform that helps engineering teams track external services, detect downtime, and receive real-time alerts through their preferred notification channels.
          </Typography>
        </div>
        <hr className={styles.divider} />
        <div className={styles.heroMockup}>
          <Image
            src="/Hero Section.png"
            alt="Sentinel monitoring dashboard mockup"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.heroMockupImage}
            priority
          />
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.metadataSection}>
          <div className={styles.metadataGrid}>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Client</span>
              <span className={styles.metadataValue}>Sentinel</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Design, Dashboard Design, UX Research</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2024</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Services Provided</span>
              <span className={styles.metadataValue}>Dashboard Design, Data Visualization, UX Research, Interaction Design, Alerting Systems</span>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={`${styles.editorialSection} ${styles.editorialSectionNoBorder}`}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Product Overview
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Sentinel is a monitoring and alerting platform that enables companies to track third-party software and APIs within their infrastructure. The goal of the redesign was to improve clarity, structure, and communication of value across the landing page, ensuring users quickly understand the product&rsquo;s purpose and capabilities.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The landing page was restructured to better communicate product benefits, improve feature visibility, and create a clearer conversion flow for new users.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Problem
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                The existing Sentinel landing page lacked clear hierarchy and structured storytelling, making it difficult to quickly communicate the product&rsquo;s monitoring and alerting value.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              How It Works
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Sentinel allows teams to:
              </Typography>
              <ul className={styles.featureList}>
                <li><Typography as="span" variant="body-large" color="muted">Add third-party services or APIs to monitor</Typography></li>
                <li><Typography as="span" variant="body-large" color="muted">Track real-time status and uptime behavior</Typography></li>
                <li><Typography as="span" variant="body-large" color="muted">Receive alerts when issues are detected</Typography></li>
                <li><Typography as="span" variant="body-large" color="muted">Get notified through email or webhook integrations</Typography></li>
              </ul>
              <Typography as="p" variant="body-large" color="muted">
                The system is designed to give engineering teams early visibility into external service failures.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Before vs After
            </Typography>
            <div className={styles.editorialContent}>
              <div className={styles.beforeAfterSystem}>
                <div className={styles.beforeAfterCard}>
                  <Typography as="span" variant="caption" className={styles.beforeAfterLabel}>
                    Before
                  </Typography>
                  <div className={styles.beforeAfterImageContainer}>
                    <Image
                      src="/Image - 1.png"
                      alt="Original landing page before redesign"
                      fill
                      sizes="(max-width: 1440px) 100vw, 1440px"
                      className={styles.showcaseImage}
                      priority
                      placeholder="empty"
                    />
                  </div>
                </div>
                <div className={styles.beforeAfterArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.beforeAfterCard}>
                  <Typography as="span" variant="caption" className={styles.beforeAfterLabel}>
                    After
                  </Typography>
                  <div className={styles.beforeAfterImageContainer}>
                    <Image
                      src="/Image - 2.png"
                      alt="Redesigned landing page after redesign"
                      fill
                      sizes="(max-width: 1440px) 100vw, 1440px"
                      className={styles.showcaseImage}
                      priority
                      placeholder="empty"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Key Sections I Designed
            </Typography>
            <div className={styles.editorialContent}>
              <div className={styles.sectionGrid}>
                <div className={styles.sectionCard}>
                  <div className={styles.sectionImageContainer}>
                    <Image
                      src="/Hero Section.png"
                      alt="Hero section redesign"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="span" variant="caption" className={styles.sectionLabel}>
                    Hero Section
                  </Typography>
                </div>
              </div>
              <div className={styles.featureCardSystem}>
                <div className={styles.featureCard}>
                  <Typography as="span" variant="caption" className={styles.featureNumber}>
                    Feature 01
                  </Typography>
                  <Typography as="h3" variant="h3" className={styles.featureTitle}>
                    Stay Ahead of Outages in Real Time
                  </Typography>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/Frame54.png"
                      alt="Real-time monitoring coverage"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="p" variant="body-text" color="muted" className={styles.featureDescription}>
                    Display real-time monitoring coverage of third-party services and APIs, showing system status visibility across services.
                  </Typography>
                </div>
                <div className={styles.featureCard}>
                  <Typography as="span" variant="caption" className={styles.featureNumber}>
                    Feature 02
                  </Typography>
                  <Typography as="h3" variant="h3" className={styles.featureTitle}>
                    Instant Notifications
                  </Typography>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/INSTANT Notification.png"
                      alt="Instant notifications alert delivery"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="p" variant="body-text" color="muted" className={styles.featureDescription}>
                    Show alert delivery system where users receive real-time notifications via email or webhook when downtime is detected.
                  </Typography>
                </div>
                <div className={styles.featureCard}>
                  <Typography as="span" variant="caption" className={styles.featureNumber}>
                    Feature 03
                  </Typography>
                  <Typography as="h3" variant="h3" className={styles.featureTitle}>
                    Custom Monitoring for Specific Services
                  </Typography>
                  <div className={styles.featureImageContainer}>
                    <Image
                      src="/Customise.png"
                      alt="Custom monitoring configuration interface"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="p" variant="body-text" color="muted" className={styles.featureDescription}>
                    Show configuration interface where users can select specific services, define monitoring rules, and customize alert preferences.
                  </Typography>
                </div>
              </div>
              <div className={styles.sectionGrid}>
                <div className={styles.sectionCard}>
                  <div className={styles.sectionImageContainer}>
                    <Image
                      src="/Frame 237051.png"
                      alt="Product capabilities section redesign"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="span" variant="caption" className={styles.sectionLabel}>
                    Product Capabilities
                  </Typography>
                </div>
                <div className={styles.sectionCard}>
                  <div className={styles.sectionImageContainer}>
                    <Image
                      src="/Pricing.png"
                      alt="Pricing section redesign"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="span" variant="caption" className={styles.sectionLabel}>
                    Pricing
                  </Typography>
                </div>
                <div className={styles.sectionCard}>
                  <div className={styles.sectionImageContainer}>
                    <Image
                      src="/396shots_so.png"
                      alt="Perfect for teams and developers"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="span" variant="caption" className={styles.sectionLabel}>
                    Perfect for Teams &amp; Developers
                  </Typography>
                </div>
                <div className={styles.sectionCard}>
                  <div className={styles.sectionImageContainer}>
                    <Image
                      src="/Frame 237196.png"
                      alt="Footer section redesign"
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.sectionImage}
                    />
                  </div>
                  <Typography as="span" variant="caption" className={styles.sectionLabel}>
                    Footer
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              My Role &amp; Contribution
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                I led the redesign of the Sentinel landing page, focusing on improving product clarity, visual hierarchy, and conversion flow.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                My work included restructuring key landing page sections such as the hero, feature spotlight, pricing, and footer to better communicate product value and improve readability for engineering-focused users.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The redesign aimed to make the product&rsquo;s monitoring and alerting capabilities easier to understand at first glance while maintaining a clean and scalable UI system.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.nextProjectSection}>
          <hr className={styles.nextDivider} />
          <Typography as="span" variant="caption" color="muted" className={styles.nextLabel}>
            Next Project
          </Typography>
          <Link href="/projects/contentsplit" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/499shots_so.png"
                alt="ContentSplit"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                ContentSplit — AI Content Repurposing Engine
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                An AI-powered workflow tool that transforms long-form content into platform-ready posts for Twitter/X, LinkedIn, Instagram, and Email.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
