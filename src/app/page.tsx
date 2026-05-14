import styles from "./page.module.css";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Section width="reading" padding="none" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Typography as="h1" variant="display" className={styles.heroTitle}>
            Omotola Oginni. Product Designer focusing on systems, metrics, and scale.
          </Typography>
          
          <Typography as="p" variant="body-large" color="muted" className={styles.heroSubtitle}>
            I bridge the gap between visual craft and strategic UX thinking to create impactful digital experiences for fintech systems and the creator economy.
          </Typography>
          
          <div className={styles.heroActions}>
            <Button href="/projects" variant="primary">View Selected Work</Button>
            <Button href="/about" variant="secondary">Read My Process</Button>
          </div>
        </div>
      </Section>

      {/* 2. Selected Projects Section */}
      <Section width="full" padding="none" className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <Typography as="h2" variant="h2">Selected Work</Typography>
          <Button href="/projects" variant="link">View all projects &rarr;</Button>
        </div>
        
        <div className={styles.projectGrid}>
          <ProjectCard 
            slug="fintech-dashboard"
            title="Next-Gen Fintech Dashboard"
            description="Redesigning a high-volume trading dashboard to increase user retention and improve data density."
            tags={["Product Design", "Design Systems", "Fintech"]}
          />
          <ProjectCard 
            slug="creator-platform"
            title="Creator Economy Platform"
            description="A seamless monetization and analytics platform designed specifically for independent creators."
            tags={["UX Research", "UI Design", "SaaS"]}
          />
        </div>
      </Section>

      {/* 3. About Preview Section */}
      <Section width="reading" padding="none" className={styles.aboutSection}>
        <Typography as="h2" variant="h2" className={styles.aboutTitle}>Design Philosophy</Typography>
        
        <div className={styles.aboutNarrative}>
          <Typography as="p" variant="body-large" color="muted">
            I believe that great design is inherently systemic. It's not just about what an interface looks like, but how it scales, how it solves business constraints, and how effortlessly it guides the user to success.
          </Typography>
          <Typography as="p" variant="body-large" color="muted">
            Over the past 5 years, I've partnered with early-stage founders and enterprise teams to turn ambiguous problems into measurable product outcomes.
          </Typography>
        </div>

        <div className={styles.aboutAction}>
          <Button href="/about" variant="secondary">Read my full story</Button>
        </div>
      </Section>

      {/* 4. Contact / CTA Section */}
      <Section width="reading" padding="none" className={styles.contactSection}>
        <Typography as="h2" variant="display" className={styles.contactTitle}>
          Let's build something great.
        </Typography>
        
        <Typography as="p" variant="body-large" color="muted" className={styles.contactSubtitle}>
          Currently looking for senior product roles. Whether you have a project in mind or just want to chat about design systems, I'd love to hear from you.
        </Typography>

        <a href="mailto:hello@omotola.com" className={styles.contactEmail}>
          hello@omotola.com
        </a>
      </Section>
    </main>
  );
}
