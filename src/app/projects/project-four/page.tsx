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
      <Section width="full" padding="none">
        <div className={styles.heroGrid}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            NBC Trade Fair — Landing Page &amp; Commerce Onboarding Experience
          </Typography>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroOverview}>
            A conversion-focused landing page designed for a large-scale trade fair commerce platform, enabling vendors and participants to seamlessly onboard into a digital dashboard.
          </Typography>
        </div>
        <hr className={styles.divider} />
        <div className={styles.heroMockup}>
          <Image
            src="/126shots_so.png"
            alt="NBC Trade Fair landing page mockup"
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
          <Link href="/projects/project-five" className={styles.nextProjectCard}>
            <div className={styles.nextProjectImageContainer}>
              <Image
                src="/813shots_so.png"
                alt="Smarg"
                fill
                className={styles.nextProjectImage}
              />
            </div>
            <div className={styles.nextProjectContent}>
              <Typography as="h3" variant="h3" className={styles.nextProjectTitle}>
                Smarg – Neobank for African Creatives
              </Typography>
              <Typography as="p" variant="body-text" color="muted">
                A modern mobile banking experience designed for African creatives, freelancers, and digital entrepreneurs.
              </Typography>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
