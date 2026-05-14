import styles from "./page.module.css";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section padding="large">
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Omotola Oginni. Product Designer focusing on systems, metrics, and scale.
          </h1>
          <p className={styles.heroSubtitle}>
            I bridge the gap between visual craft and strategic UX thinking to create impactful digital experiences for fintech systems and the creator economy.
          </p>
          <div className={styles.heroActions}>
            <Button href="/projects" variant="primary">View Selected Work</Button>
            <Button href="/about" variant="secondary">Read My Philosophy</Button>
          </div>
        </div>
      </Section>

      {/* Selected Work Section */}
      <Section padding="large">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
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

      {/* Philosophy Snippet Section */}
      <Section padding="large">
        <div className={styles.philosophy}>
          <h2 className={styles.sectionTitle}>Design Philosophy</h2>
          <p className={styles.philosophyText}>
            I believe that great design is inherently systemic. It's not just about what an interface looks like, but how it scales, how it solves business constraints, and how effortlessly it guides the user to success.
          </p>
          <Button href="/about" variant="secondary">Learn more about my process</Button>
        </div>
      </Section>
    </main>
  );
}
