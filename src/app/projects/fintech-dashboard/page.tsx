import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ContentSplit — Omotola Oginni",
  description:
    "AI-powered workflow for transforming long-form content into platform-ready posts across multiple channels.",
};

export default function ContentSplitProject() {
  return (
    <div className={styles.page}>
      {/* ── 1. Hero — Title + Overview ── */}
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <h1 className={styles.heroTitle}>ContentSplit</h1>
          <p className={styles.heroOverview}>
            AI-powered workflow for transforming long-form content into
            platform-ready posts across multiple channels.
          </p>
        </div>

        {/* ── 2. Divider ── */}
        <hr className={styles.divider} />

        {/* ── 3. Check it Out ── */}
        <div className={styles.checkItOutRow}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.checkItOut}
            id="project-external-link"
          >
            Check it out{" "}
            <span className={styles.checkItOutArrow}>↗</span>
          </a>
        </div>

        {/* ── 4. Hero Mockup ── */}
        <div className={styles.heroMockup}>
          <Image
            src="/499shots_so.png"
            alt="ContentSplit — Main product mockup"
            fill
            className={styles.heroMockupImage}
            priority
          />
        </div>
      </Section>

      {/* ── 5. Project Description ── */}
      <Section width="full" padding="none">
        <div className={styles.descriptionSection}>
          <p className={styles.descriptionText}>
            ContentSplit helps creators, teams, and marketers convert long-form
            content into platform-specific posts across channels like LinkedIn,
            X/Twitter, Instagram, and email. The platform streamlines
            AI-assisted content workflows while maintaining tone consistency and
            reducing repetitive publishing effort.
          </p>
        </div>
      </Section>

      {/* ── 6. Project Metadata ── */}
      <Section width="full" padding="none">
        <div className={styles.metadataSection}>
          <div className={styles.metadataGrid}>
            {/* Client */}
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Client</span>
              <span className={styles.metadataValue}>Personal Project</span>
            </div>

            {/* Role */}
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <ul className={styles.metadataList}>
                <li>Product Design</li>
                <li>Design Systems</li>
                <li>UX Audits</li>
                <li>UI Design</li>
              </ul>
            </div>

            {/* Year */}
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2026</span>
            </div>

            {/* Services Provided */}
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Services</span>
              <ul className={styles.metadataList}>
                <li>Design Systems</li>
                <li>UX Auditing</li>
                <li>Product Strategy</li>
                <li>Interface Design</li>
                <li>AI Workflow Design</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 7. Visual Showcase ── */}
      <Section width="full" padding="none">
        <div className={styles.showcaseSection}>
          <div className={styles.showcaseGrid}>
            {/* Full-width showcase image 1 */}
            <div className={styles.showcaseImageContainer}>
              {/* Replace src with actual image later */}
            </div>

            {/* Full-width showcase image 2 */}
            <div className={styles.showcaseImageContainer}>
              {/* Replace src with actual image later */}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 8. Video Showcase ── */}
      <Section width="full" padding="none">
        <div className={styles.videoSection}>
          <div className={styles.videoContainer}>
            {/* Video placeholder — replace with <video> element later */}
            <div className={styles.videoPlaceholderIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
