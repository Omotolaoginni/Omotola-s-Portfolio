import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "NBC Trade Fair — Omotola Oginni",
  description:
    "A conversion-focused landing page for a large-scale trade fair commerce platform, enabling vendors to onboard into a digital dashboard.",
};

export default function NbcTradeFairProject() {
  return (
    <div className={styles.page}>
      {/* ── 1. HERO ── */}
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Building a Responsive Vendor Payment Experience for NBC Trade Fair 2025
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            Collaborated on the landing page experience and designed the mobile onboarding flow that helped vendors complete payment setup and POS verification seamlessly.
          </Typography>
        </div>
        <hr className={styles.divider} />

        <div className={styles.checkItOutRow}>
          <a
            href="https://mainstack.com/nbc-tradefair"
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
            src="/197shots_so.png"
            alt="NBC Trade Fair landing page mockup"
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
              <span className={styles.metadataLabel}>Client</span>
              <span className={styles.metadataValue}>Mainstack</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Design + Responsive Design + UX Design + Design Collaboration</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2025</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Services Provided</span>
              <span className={styles.metadataValue}>Responsive Design, Landing Page UX, Mobile Adaptation, Interaction Design, Visual Hierarchy</span>
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
                The NBC International Trade Fair 2025 is an international trade event held across the USA and UK, bringing together vendors, small business owners, and customers in a shared marketplace experience. I worked on the digital onboarding and payment setup experience that helped vendors prepare to sell seamlessly during the event.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The experience included a responsive landing page and a guided onboarding dashboard where vendors could complete business setup, verify POS terminals, and access payment tools needed to accept transactions during the trade fair.
              </Typography>
              <div className={styles.showcaseImageGrid}>
                <div className={styles.showcaseImageContainer}>
                  <Image
                    src="/61shots_so.png"
                    alt="NBC Trade Fair problem context 1"
                    fill
                    className={styles.showcaseImage}
                  />
                </div>
                <div className={styles.showcaseImageContainer}>
                  <Image
                    src="/448shots_so.png"
                    alt="NBC Trade Fair problem context 2"
                    fill
                    className={styles.showcaseImage}
                  />
                </div>
              </div>
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
                Vendors needed a clear and fast way to get started with payment setup ahead of the trade fair. The challenge was designing an experience that could communicate complex setup requirements like POS configuration, payment access, and verification steps while still being simple enough for users to complete quickly without confusion.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. SOLUTION ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Solution
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                We designed a two part experience:
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; A landing page that introduced vendors to the payment setup process.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; A guided onboarding dashboard where they could complete registration, verify their POS terminal, and activate payment capabilities.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The goal was to reduce friction and help users become ready to transact in minutes.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/177shots_so.png"
                  alt="NBC Trade Fair solution overview"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6. KEY DESIGN DECISIONS ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Dashboard Onboarding Flow
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                After clicking &ldquo;Get Started,&rdquo; vendors were taken into a dashboard onboarding flow where they completed business registration, verified their POS terminal ID, and gained access to payment tools like QR payments and transaction tracking. I worked on the mobile version of this onboarding flow to ensure it remained intuitive and easy to complete on smaller devices.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/Mobile.png"
                  alt="Mobile onboarding flow"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6. VENDOR ONBOARDING FLOW ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Mobile Responsive Experience
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                A key part of my work was adapting the desktop landing page into a mobile experience without losing hierarchy or clarity. I reorganized content sections, adjusted spacing, and ensured that critical actions and messages remained visible and accessible across smaller screens while preserving the original visual intent.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                In addition to the landing page, I also worked on the mobile experience for the vendor onboarding dashboard. This involved translating complex onboarding flows into a more simplified mobile structure, ensuring vendors could easily complete key actions such as business registration, POS terminal verification, and accessing payment tools without friction on smaller devices.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/Mobile 23.png"
                  alt="Mobile responsive experience screenshot"
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
                I worked as a Product Designer on both the landing page experience and the mobile onboarding flow for the vendor dashboard.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                My responsibilities included:
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Collaborating with a visual designer on the structure and layout direction of the landing page.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Contributing to discussions around content hierarchy and how information should be presented to vendors.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Translating the desktop landing page into a responsive mobile experience.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Adapting layouts, typography, spacing, and visual components for smaller screens while maintaining consistency with the web version.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Preserving the visual hierarchy and interaction flow across breakpoints.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Designing the mobile onboarding experience for the vendor dashboard.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Working on mobile dashboard flows where vendors could:
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                1. Input business details,
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                2. Complete onboarding,
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                3. Verify POS terminal IDs,
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                4. Access QR payment functionality,
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                5. And monitor transactions.
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
          <Link href="/projects/smarg" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/813shots_so.png"
                alt="Smarg Neobank"
                fill
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                Smarg – Neobank for African Creatives
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                A modern mobile banking experience designed for African creatives, freelancers, and digital entrepreneurs, combining financial automation, flexible credit access, and device financing.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
