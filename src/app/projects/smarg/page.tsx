import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Smarg — Omotola Oginni",
  description:
    "A modern mobile banking experience for African creatives, freelancers, and digital entrepreneurs.",
};

export default function SmargProject() {
  return (
    <div className={styles.page}>
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Smarg – The banking app for creatives and digital professionals.
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            A mobile first fintech ecosystem helping African creatives automate finances, access device financing, and manage recurring payments seamlessly.
          </Typography>
        </div>
        <hr className={styles.divider} />
        <div className={styles.checkItOutRow}>
          <a
            href="https://1eaacd39.smarg-web.pages.dev/"
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
            src="/578shots_so.png"
            alt="Smarg neobank mockup"
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
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2024</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Designer · Interaction Designer</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Project Type</span>
              <span className={styles.metadataValue}>Financial Product UX + Landing Page System</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Domain</span>
              <span className={styles.metadataValue}>Fintech / Payments Infrastructure</span>
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
                Smarg is a financial platform built for African creatives, designed to simplify money management, global spending, and recurring financial workflows. The project focused on expanding the existing mobile ecosystem by integrating MoneyFlow automation and device financing features directly into the homepage experience while maintaining usability, clarity, and existing transaction workflows.
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
                The existing experience supported transactions, transfers, and global card usage, but lacked integrated financial automation and structured financing workflows. The challenge was introducing new capabilities such as device financing and automated money management without disrupting the familiarity and simplicity of the existing homepage experience.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The solution required balancing financial visibility, repayment management, and onboarding clarity while ensuring users could easily navigate new features alongside their everyday financial activities.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/403shots_so.png"
                  alt="Smarg problem context"
                  fill
                  sizes="(max-width: 992px) 100vw, 60vw"
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Solution
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                The redesigned homepage introduced an &ldquo;Explore&rdquo; section that surfaced new financial capabilities including Device Financing and MoneyFlow automation. Users could browse financing options, review repayment structures, make down payments through multiple payment methods, and track financing progress directly within the product ecosystem.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The MoneyFlow experience introduced automation templates that allowed users to schedule recurring transfers, route incoming funds into designated accounts, and create savings goals for future expenses. These workflows were designed to simplify financial management while reducing repetitive manual actions.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/326shots_so.png"
                  alt="Smarg solution overview"
                  fill
                  sizes="(max-width: 992px) 100vw, 60vw"
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Repayment &amp; Behavioral UX
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                A key part of the experience focused on repayment visibility and behavioral financial feedback. The financing interface dynamically adapts based on repayment status, helping users understand upcoming due dates, overdue payments, and available actions through progressive visual states and contextual call-to-actions.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                As repayment dates approached, interface states shifted gradually to communicate urgency without overwhelming users. The experience also introduced a flexible &ldquo;Pay in Advance&rdquo; flow that allowed users to complete payments ahead of scheduled due dates, improving repayment flexibility and user control.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/Frame34.png"
                  alt="Smarg repayment UX interface"
                  fill
                  sizes="(max-width: 992px) 100vw, 60vw"
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Responsive Website Experience
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                In addition to the mobile product experience, I contributed to the responsive adaptation of the Smarg marketing website and FAQ experience. My work included designing Bento card layouts, selecting and integrating supporting visual assets, and adapting the experience across breakpoints to ensure consistency and usability on mobile devices. I also designed responsive marquee testimonial interactions that maintained readability and motion consistency across screen sizes.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/Frame35.png"
                  alt="Smarg responsive website experience"
                  fill
                  sizes="(max-width: 992px) 100vw, 60vw"
                  className={styles.showcaseImage}
                />
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
                My contribution focused on integrating new financial capabilities into the existing fintech ecosystem while maintaining usability, visual hierarchy, and overall product consistency.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                I explored financing workflows and repayment behaviors through competitive analysis, studying existing financing and loan experiences to inform clearer payment structures, due date visibility, and repayment interactions within the product experience.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                On the marketing website, I contributed to the visual direction and responsiveness of the platform experience. I worked on the structure and adaptation of the Bento card layouts across desktop and mobile views, ensuring consistency in spacing, layout behavior, and responsiveness across screen sizes.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                I also designed the responsive behavior of the marquee testimonial interactions, translating the desktop experience into a mobile friendly interaction system while maintaining readability and visual continuity.
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
          <Link href="/projects/sentinel" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/162shots_so.png"
                alt="Sentinel"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                Sentinel Landing Page Redesign
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                A monitoring service that tracks third-party software and API uptime in real time, helping engineering teams detect outages early.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
