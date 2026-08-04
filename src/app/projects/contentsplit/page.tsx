import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import { VideoPlayer } from "./VideoPlayer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ContentSplit — Omotola Oginni",
  description:
    "AI-powered publishing platform that transforms one long-form article into platform ready content for multiple channels.",
};

export default function ContentSplitProject() {
  return (
    <div className={styles.page}>
      {/* ── 1. PRODUCT OVERVIEW ── */}
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
            <Typography as="h1" variant="display" className={styles.heroTitle}>
              ContentSplit
            </Typography>
            <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
              AI-powered publishing platform that transforms one long-form article into platform ready content for multiple channels.
            </Typography>
        </div>

        {/* ── Divider ── */}
        <hr className={styles.divider} />

        {/* ── Check it Out Link ── */}
        <div className={styles.checkItOutRow}>
          <a
            href="https://contentsplit-ai.vercel.app/"
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
            src="/238shots_so.png"
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
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2026</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Designer · UX Designer</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Project Type</span>
              <span className={styles.metadataValue}>AI-assisted MVP / Content System</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Domain</span>
              <span className={styles.metadataValue}>Content Distribution / Product Thinking</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. PRODUCT OVERVIEW ── */}
      <Section width="full" padding="none">
        <div className={`${styles.editorialSection} ${styles.editorialSectionNoBorder}`}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Product Overview
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                ContentSplit is an AI-powered content publishing platform that helps creators, marketers, and businesses transform a single long-form article into platform ready content in minutes. Users can paste one blog post, choose a single platform or generate content for multiple platforms at once using Batch Mode, then review and refine every output before publishing. The experience is designed to reduce repetitive work while keeping creators in control of their content.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/530shots_so.png"
                  alt="ContentSplit product overview screenshot"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. THE PROBLEM ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              The Problem
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Creating content for multiple platforms usually means rewriting the same ideas several times to match different audiences and content formats. This repetitive workflow slows creators down, introduces inconsistencies, and makes publishing at scale difficult.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The challenge was to design an AI-first experience that simplifies content repurposing while giving users the flexibility to generate content for a single platform or an entire publishing workflow without sacrificing quality or control.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. CONTENT TRANSFORMATION FLOW ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Content Transformation Flow
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                Users begin by pasting a long-form article into ContentSplit.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                From there they can choose between two publishing workflows:
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Single Post Mode, for generating content for one selected platform.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                &bull; Batch Mode, for generating content across multiple selected platforms in a single session.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                Once the desired platforms are selected, the AI generates platform-specific content optimized for each channel. Users can review, edit, and refine every output before publishing, ensuring the final content aligns with their intent and brand voice.
              </Typography>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </Section>

      {/* ── 5. KEY PRODUCT CAPABILITIES ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Key Product Capabilities
            </Typography>
            <div className={styles.editorialContent}>
              <Typography as="p" variant="body-large" color="muted">
                ContentSplit provides a flexible AI-powered content generation workflow that allows users to transform a single long-form article into platform-ready content. Users can choose between Single Post Mode for individual platform generation or Batch Mode to generate content for multiple platforms in one session. They can select their preferred platforms, customize the output tone, regenerate results when needed, and refine every AI-generated draft before publishing. The system also preserves previous generations, making it easy to revisit, edit, and reuse content without starting over.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/662shots_so.png"
                  alt="ContentSplit key product capabilities screenshot"
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
                My primary contributions to ContentSplit focused on strengthening the product&apos;s visual consistency and usability through design system refinement and UI/UX audits.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                I worked on defining and refining the color system to ensure consistency across different content states, platform outputs, and interaction feedback. This helped establish a more structured and scalable visual language across the product.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                In addition, I conducted UI/UX audits across key flows, including the input editor, content generation process, and platform-specific output views. These audits helped identify inconsistencies in hierarchy, spacing, and interaction clarity, which improved overall usability and coherence of the experience.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 8. KEY INSIGHTS ── */}
      <Section width="full" padding="none">
        <div className={styles.editorialSection}>
          <div className={styles.editorialGrid}>
            <Typography as="h2" variant="h2" className={styles.editorialHeading}>
              Key Insights
            </Typography>
            <div className={styles.editorialContent}>
              <div className={styles.insightBlock}>
                <Typography as="h3" variant="h3" className={styles.insightHeading}>
                  Balancing automation with user control
                </Typography>
                <Typography as="p" variant="body-large" color="muted">
                  One of the biggest design challenges was ensuring AI accelerated the content creation process without removing user control. While ContentSplit generates platform-specific content automatically, users still need the ability to review, edit, regenerate, and refine every output before publishing. Designing around this balance helped create a workflow that feels efficient while keeping creators confident in the final result.
                </Typography>
              </div>
              <div className={styles.insightBlock}>
                <Typography as="h3" variant="h3" className={styles.insightHeading}>
                  Designing for different publishing workflows
                </Typography>
                <Typography as="p" variant="body-large" color="muted">
                  Not every creator works the same way. Some publish to a single platform, while others manage content across multiple channels. Supporting both Single Post Mode and Batch Mode required designing flexible workflows that accommodate different publishing habits without increasing complexity.
                </Typography>
              </div>
              <div className={styles.insightBlock}>
                <Typography as="h3" variant="h3" className={styles.insightHeading}>
                  Building trust through transparency
                </Typography>
                <Typography as="p" variant="body-large" color="muted">
                  AI-generated content should feel understandable, not unpredictable. The experience was designed to make every step—from content generation to editing and regeneration—clear and transparent. Giving users visibility into the process and control over the final output helps build confidence in AI while encouraging iteration rather than treating generated content as a finished product.
                </Typography>
              </div>
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
          <Link href="/projects/mainstack-refer-earn" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/64shots_so.png"
                alt="Mainstack Referral & Affiliate dashboard"
                fill
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                Mainstack — Referral &amp; Affiliate Experience
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                Creator-focused referral and affiliate experience designed to help users discover products, promote creator businesses, and earn recurring commissions through a seamless cross-device workflow.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
