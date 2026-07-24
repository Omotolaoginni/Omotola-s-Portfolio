import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import { VideoPlayer } from "./VideoPlayer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mainstack Ambassador Program — Omotola Oginni",
  description:
    "A structured ambassador program designed to enable creators to drive product-led growth through referrals, track performance, and earn recurring rewards.",
};

export default function AmbassadorProgramProject() {
  return (
    <div className={styles.page}>
      {/* ── 1. HERO ── */}
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Mainstack Ambassador Growth Program Experience
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            A creator focused ambassador system designed to help users earn recurring income by referring Mainstack, tracking referrals, and scaling earnings through a structured growth and commission model.
          </Typography>
        </div>
        <hr className={styles.divider} />

        <div className={styles.checkItOutRow}>
          <a
            href="https://mainstack.com/ambassador-program"
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
            src="/194shots_so.png"
            alt="Mainstack Ambassador Program dashboard mockup"
            fill
            className={styles.heroMockupImage}
            priority
          />
        </div>
      </Section>

      {/* ── 2. METADATA ── */}
      <Section width="full" padding="none">
        <div className={styles.metadataSection}>
            <div className={styles.metadataGrid}>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2025</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Designer · UX Designer (Growth Systems)</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Project Type</span>
              <span className={styles.metadataValue}>Ambassador &amp; Referral Program Design</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Domain</span>
              <span className={styles.metadataValue}>Creator Growth Platform</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. PRODUCT OVERVIEW ── */}
      <Section width="full" padding="none">
        <div className={`${styles.editorialSection} ${styles.editorialSectionNoBorder}`}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Product Overview
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Mainstack Ambassador Growth Program is a referral driven growth system that enables creators to become official ambassadors of Mainstack. It provides a structured way for users to refer others to the platform and earn recurring commissions based on successful sign ups and activity generated through their referral links.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The experience is designed to support scalable acquisition while giving ambassadors visibility into their performance, earnings, and referral impact.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. PROBLEM / CONTEXT ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Problem
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Traditional referral systems lack visibility, structure, and long-term incentive tracking. Users often struggle to understand how earnings are calculated, how referrals perform over time, and how to consistently grow their ambassador impact.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The challenge was to design a system that makes referral growth transparent, motivating, and easy to understand.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. HOW IT WORKS ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              How it works
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                The ambassador system follows a simple growth loop:
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Users sign up as Mainstack Ambassadors
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; They receive a unique referral link
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; They receive a unique referral link
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; New users sign up through the link
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Ambassadors earn recurring commissions based on referred user activity
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The system is designed to provide clarity around performance, earnings, and referral impact in real time.
              </Typography>
              <VideoPlayer />
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
                A major focus of the project was adapting the desktop experience into a responsive mobile system without losing clarity, spacing consistency, or visual hierarchy. The mobile layouts were optimized to preserve readability, improve navigation flow, and maintain the overall structure of the ambassador onboarding experience across smaller screens.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/Frame 4.png"
                  alt="Mobile responsive ambassador experience"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 8. ROLE & CONTRIBUTION ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              My Role &amp; Contribution
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                I collaborated closely with a visual designer to shape the overall direction of the landing page experience. While the desktop direction was explored collaboratively, my primary contribution focused on building an accurate and scalable mobile-responsive system that maintained consistency across layouts, typography, spacing, and interaction patterns.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 9. NEXT PROJECT ── */}
      <Section width="full" padding="none">
        <div className={styles.nextProjectSection}>
          <hr className={styles.nextDivider} />
          <Typography as="span" variant="caption" color="muted" className={styles.nextLabel}>
            Next Project
          </Typography>
          <Link href="/projects/nbc-trade-fair" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/606shots_so.png"
                alt="NBC Trade Fair"
                fill
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                NBC Trade Fair — Landing Page &amp; Commerce Onboarding Experience
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                A conversion-focused landing page designed for a large-scale trade fair commerce platform, enabling vendors and participants to seamlessly onboard into a digital dashboard.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
