import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sentinel — Omotola Oginni",
  description:
    "A monitoring service that tracks third-party software and API uptime in real time.",
};

export default function SentinelProject() {
  return (
    <div className={styles.page}>
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Sentinel — Third-Party Service Monitoring &amp; Alerting
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            A monitoring service that tracks third-party software and API uptime in real time, helping engineering teams detect outages early and receive instant alerts through their preferred notification channels.
          </Typography>
        </div>
        <hr className={styles.divider} />
        <div className={styles.heroMockup}>
          <Image
            src="/707shots_so.png"
            alt="Sentinel monitoring dashboard mockup"
            fill
            className={styles.heroMockupImage}
            priority
          />
        </div>
      </Section>

      <Section width="full" padding="none">
        <div className={styles.nextProjectSection}>
          <hr className={styles.nextDivider} />
          <Typography as="span" variant="caption" color="muted" className={styles.nextLabel}>
            Next Project
          </Typography>
          <Link href="/projects/fintech-dashboard" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/499shots_so.png"
                alt="ContentSplit"
                fill
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
