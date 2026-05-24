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
            Smarg – Neobank for African Creatives
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            A modern mobile banking experience designed for African creatives, freelancers, and digital entrepreneurs, combining financial automation, flexible credit access, and device financing.
          </Typography>
        </div>
        <hr className={styles.divider} />
        <div className={styles.heroMockup}>
          <Image
            src="/813shots_so.png"
            alt="Smarg neobank mockup"
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
          <Link href="/projects/sentinel" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/707shots_so.png"
                alt="Sentinel"
                fill
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                Sentinel — Third-Party Service Monitoring &amp; Alerting
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
