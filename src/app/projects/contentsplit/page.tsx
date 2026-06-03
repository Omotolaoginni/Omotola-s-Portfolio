import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
              ContentSplit
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
              <span className={styles.metadataValue}>Capstone Project</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Product Design + Design Systems + UI Engineering</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Year</span>
              <span className={styles.metadataValue}>2026</span>
            </div>
            <div className={styles.metadataRow}>
              <span className={styles.metadataLabel}>Services</span>
              <span className={styles.metadataValue}>UI/UX Auditing, Color System Design, Responsive Design</span>
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
                ContentSplit is an AI-powered content repurposing tool that helps creators and marketers convert long-form content into multiple platform specific formats. Users paste a blog post or article into the system, and the tool automatically generates optimized versions for Twitter, LinkedIn, Instagram, and Email.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                Each output is structured based on platform requirements, allowing users to quickly review, edit, and reuse content without manually rewriting it multiple times.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/892shots_so.png"
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
                Content creators and marketers spend significant time manually rewriting the same content across multiple platforms. A single blog post often needs to be reformatted into Twitter threads, LinkedIn posts, Instagram captions, and email content. This repetitive process is time consuming, inconsistent, and inefficient.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The challenge was to design a system that reduces this friction by automating content transformation while keeping users in control of editing and final output quality.
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
                Users paste their long form content into the ContentSplit editor. The system processes the input and generates multiple versions of the same content, optimized for different platforms. Users can switch between tabs such as Twitter, LinkedIn, Instagram, and Email to view tailored outputs.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                Each version can be regenerated or edited before copying, allowing flexibility while maintaining platform specific formatting and tone.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/493shots_so.png"
                  alt="ContentSplit content transformation flow screenshot"
                  fill
                  className={styles.showcaseImage}
                />
              </div>
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
                ContentSplit is built around a tab based output system where each platform generates a different version of the same input content. Users can regenerate outputs if they are not satisfied and switch between tones such as professional, casual, or punchy.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The system also saves past generations, allowing users to revisit and reuse previously generated content without starting over.
              </Typography>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src="/421shots_so.png"
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
              <Typography as="p" variant="body-large" color="muted">
                A key design challenge was balancing automation with user control in an AI-generated content system. While the system produces multiple platform-specific outputs automatically, users still need clarity, visibility, and the ability to edit or refine results before using them.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                Another important challenge was designing effective prompting behavior for the AI system to ensure outputs were not only accurate but also visually structured, readable, and aesthetically pleasing across different content formats. This required careful consideration of how generated text is presented within the interface.
              </Typography>
              <Typography as="p" variant="body-large" color="muted">
                The interface was designed to make content transformation feel predictable, transparent, and easy to iterate on, while maintaining trust in the AI-generated outputs.
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
          <Link href="/projects/mainstack-refer-earn" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/436shots_so.png"
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
