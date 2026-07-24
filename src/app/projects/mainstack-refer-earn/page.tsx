import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mainstack Refer & Earn — Omotola Oginni",
  description:
    "Creator-focused referral and affiliate experience designed to help users discover products, promote creator businesses, and earn recurring commissions.",
};

export default function CreatorPlatformProject() {
  return (
    <div className={styles.page}>
      {/* ── 1. HERO ── */}
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Mainstack Refer &amp; Earn
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            Creator focused referral and affiliate landing page experience that helps users discover products, promote businesses, and earn recurring commissions through a seamless cross-device workflow.
          </Typography>
        </div>
        <hr className={styles.divider} />

        <div className={styles.checkItOutRow}>
          <a
            href="https://mainstack.com/referral-program"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.checkItOut}
            id="project-external-link"
          >
            Check it out <span className={styles.checkItOutArrow}>↗</span>
          </a>
        </div>

        <div className={styles.heroMockup}>
          <Image
            src="/109shots_so.png"
            alt="Mainstack referral dashboard mockup"
            fill
            className={styles.heroMockupImage}
            priority
          />
        </div>
      </Section>

      {/* ── 2. INTRO / OVERVIEW ── */}
      <Section width="full" padding="none">
        <div className={`${styles.editorialSection} ${styles.editorialSectionNoBorder}`}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Product Overview
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Mainstack Refer &amp; Earn is a referral and affiliate experience designed to simplify how users discover products, share referral links, and earn recurring commissions. The landing page was built to communicate product value clearly while guiding users through a seamless onboarding and referral journey across desktop and mobile devices.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. METADATA ── */}
      <Section width="full" padding="none">
        <div className={styles.metadataSection}>
            <div className={styles.metadataGrid}>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2025</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Designer · Growth UX Designer</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Project Type</span>
              <span className={styles.metadataValue}>Affiliate &amp; Monetization System UX</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Domain</span>
              <span className={styles.metadataValue}>Creator Economy / Fintech Growth</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. THE PROBLEM ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Problem
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Referral and affiliate platforms often overwhelm users with complex onboarding flows, unclear reward structures, and poor mobile responsiveness. The challenge was creating an experience that communicated trust, explained earning potential clearly, and remained easy to navigate across different screen sizes.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/643shots_so.png"
                  alt="Referral platform problem overview"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. HOW IT WORKS ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              How It Works
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Creators sign up and receive a unique referral link or code. They share this link across their audience on social media, blogs, or direct messages. When a new user signs up or makes a purchase through the referral link, the creator earns a commission. The system tracks each referral in real time and surfaces earnings, conversion rates, and payout history in a dedicated dashboard.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/757shots_so.png"
                  alt="How Mainstack referral flow works"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6. MOBILE RESPONSIVE EXPERIENCE ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Mobile Responsive Experience
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                A major focus of the project was translating the desktop experience into a responsive mobile interface without losing clarity, hierarchy, or usability. The mobile adaptation preserved the visual structure of the landing page while optimizing spacing, readability, and interaction patterns for smaller screens.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/Frame3.png"
                  alt="Referral tracking dashboard"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 7. MY ROLE & CONTRIBUTION ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              My Role &amp; Contribution
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                I collaborated closely with a visual designer to define the direction of the Mainstack Refer &amp; Earn landing page. While the initial desktop direction was explored collaboratively, my primary focus was translating the design into a scalable and accurate mobile-responsive system.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                I ensured consistency across typography, spacing, layout hierarchy, and interaction patterns, aligning the landing page with the overall product design system.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                My work focused strictly on the marketing and acquisition facing landing page.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 8. NEXT PROJECT ── */}
      <Section width="full" padding="none">
        <div className={styles.nextProjectSection}>
          <hr className={styles.nextDivider} />
          <Typography as="span" variant="caption" color="muted" className={styles.nextLabel}>
            Next Project
          </Typography>
          <Link href="/projects/ambassador-program" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/582shots_so.png"
                alt="Mainstack Ambassador Program"
                fill
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                Mainstack — Ambassador Growth Program Experience
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                A structured ambassador program designed to enable creators to drive product-led growth through referrals, track performance, and earn recurring rewards.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
