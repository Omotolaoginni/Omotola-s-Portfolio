import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ContentSplit — Omotola Oginni",
  description:
    "AI-powered content repurposing system that transforms long-form writing into platform-ready posts for social and email distribution.",
};

export default function ContentSplitProject() {
  return (
    <div className={styles.page}>
      {/* ── 1. PRODUCT OVERVIEW ── */}
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Product Overview
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            AI-powered content repurposing system that transforms long-form writing into platform-ready posts for social and email distribution.
          </Typography>
        </div>

        {/* ── Divider ── */}
        <hr className={styles.divider} />

        {/* ── Check it Out Link ── */}
        <div className={styles.checkItOutRow}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.checkItOut}
            id="project-external-link"
          >
            Check it out <span className={styles.checkItOutArrow}>↗</span>
          </a>
        </div>

        {/* ── Hero Mockup ── */}
        <div className={styles.heroMockup}>
          <Image
            src="/499shots_so.png"
            alt="ContentSplit dashboard mockup"
            fill
            className={styles.heroMockupImage}
            priority
          />
        </div>

        {/* ── Metadata Strip ── */}
        <div className={styles.metadataSection}>
          <div className={styles.metadataGrid}>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Client</span>
              <span className={styles.metadataValue}>Personal Project</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <ul className={styles.metadataList}>
                <li>Product Design</li>
                <li>Design Systems</li>
                <li>UI Engineering</li>
              </ul>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2026</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Services</span>
              <ul className={styles.metadataList}>
                <li>UI/UX Auditing</li>
                <li>Color System Design</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. THE PROBLEM ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Problem
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Adapting long-form writing like articles and essays for multiple channels is a highly repetitive, manual process. Creators must parse their text, shorten paragraphs, write brief summaries for LinkedIn, compile punchy bullet-points for Twitter/X, and format email updates. This manual overhead creates a bottleneck, causing creators to either lose hours to copying and editing or abandon secondary channels entirely.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. CONTENT TRANSFORMATION FLOW ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Content Transformation Flow
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                The transformation workflow starts by pasting a raw draft or markdown file directly into the input editor. The AI engine parses the key themes, structure, and intent of the source text. Then, the system populates distinct preview tabs for LinkedIn, Twitter/X, Instagram, and email. Finally, creators can make manual inline adjustments or prompt the system to regenerate specific platform outputs.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. KEY PRODUCT CAPABILITIES ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Key Product Capabilities
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                ContentSplit provides cross-channel output generation tailored to Twitter, LinkedIn, Instagram, and email formatting guidelines. It features an inline regeneration tool for adjusting length and tone, full text editing support inside each channel's feed mockup, and a local history view to access previously generated versions.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. CORE PRODUCT EXPERIENCE ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Core Product Experience
            </Typography>
            <div className={styles.editorialContent}>
              <div className={styles.uiScreenshotsGrid}>
                {/* Input Editor */}
                <div className={styles.showcaseImageContainer}>
                  <Image
                    src="/499shots_so.png"
                    alt="ContentSplit input editor screenshot"
                    fill
                    className={styles.showcaseImage}
                  />
                </div>

                {/* Output Tabs & Generated Results View */}
                <div className={styles.showcaseImageContainer}>
                  <Image
                    src="/contentsplit-channels-v3.png"
                    alt="ContentSplit output tabs and generated results view screenshot"
                    fill
                    className={styles.showcaseImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6. MY ROLE & CONTRIBUTION ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              My Role &amp; Contribution
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                My contribution to this project focused on designing the color system for the interface to ensure reading comfort during long editing sessions and establishing clear visual contrast between input text and generated content. I also conducted UI/UX audits of the multi-pane workflow to identify friction points and optimize the layout of the platform tabs and preview states.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 7. KEY INSIGHTS ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Key Insights
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Users require real-time visual feedback to trust AI-generated outputs. By rendering content inside accurate feed previews rather than plain text fields, users can quickly review and validate formatting. Clear layouts and immediate visual context reduce uncertainty, accelerate manual review times, and build trust in the platform's outputs.
              </Typography>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
