import styles from "./page.module.css";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";
import { ContactSection } from "@/components/layout/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>

          {/* Hero stage — heading and subtitle */}
          <div className={styles.heroStage}>

            {/* Introductory Badge — gradient border, centered */}
            <div className={styles.heroBadgeRow}>
              <div className={styles.heroBadgeGradientRing}>
                <div className={styles.heroBadgeGradientInner}>
                  HELLO! I'M OMOTOLA OGINNI
                </div>
              </div>
            </div>

            {/* Full H1 heading — single line */}
            <h1 className={styles.heroHeadingFull}>
              Product Designer
            </h1>

            {/* Value proposition — directly below heading */}
            <p className={styles.heroSubtitle}>
              I design and build scalable digital products across SaaS, fintech, and creator platforms using design systems, product thinking, and AI-assisted workflows.
            </p>

          </div>

        </div>
      </section>

      {/* 2. Selected Projects Section */}
      <Section width="full" padding="none" className={styles.projectsSection} id="work">
        <div className={styles.projectsHeader}>
          <Typography as="h2" variant="h2">Selected Work</Typography>
          <Button href="/projects" variant="link">View all projects &rarr;</Button>
        </div>
        <div className={styles.sectionDivider} />
        
        <div className={styles.projectGrid}>
          <ProjectCard 
            slug="contentsplit"
            title="ContentSplit"
            description="AI Content Repurposing Engine"
            tags={["AI Workflow"]}
            imageUrl="/561shots_so.png"
          />
          <ProjectCard 
            slug="mainstack-refer-earn"
            title="Mainstack"
            description="Athlete Experience"
            tags={["Responsive Design"]}
            imageUrl="/25shots_so.png"
          />
          <ProjectCard 
            slug="ambassador-program"
            title="Mainstack"
            description="Ambassador Experience"
            tags={["Growth Systems"]}
            imageUrl="/200shots_so.png"
          />
          <ProjectCard 
            slug="nbc-trade-fair"
            title="Mainstack"
            description="NBC Trade Fair"
            tags={["Landing Page"]}
            imageUrl="/606shots_so.png"
          />
          <ProjectCard 
            slug="smarg"
            title="SMARG"
            description="Neobank for African Creatives"
            tags={["Fintech"]}
            imageUrl="/425shots_so.png"
          />
          <ProjectCard 
            slug="sentinel"
            title="Sentinel"
            description="Landing Page Redesign"
            tags={["SaaS"]}
            imageUrl="/162shots_so.png"
          />
        </div>

      </Section>

      {/* 3. About Me Section */}
      <Section id="about" width="full" padding="none" className={styles.aboutSection}>
        <div className={styles.aboutHeader}>
          <Typography as="h2" variant="h2">About Me</Typography>
          <div className={styles.sectionDivider} />
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                I&apos;m a Product Designer focused on building scalable, systems-driven digital products across SaaS, fintech, and creator platforms. I combine product thinking, design systems, and AI-assisted workflows to design intuitive, accessible, and scalable user experiences. My work is grounded in strong UX principles, using structured systems and thoughtful execution to simplify complex workflows and build products that are consistent, usable, and scalable.
              </Typography>
            </div>
          </div>
          <div className={styles.aboutImageCol}>
            <div className={styles.aboutImageContainer}>
              <Image 
                src="/my-photo 2.png" 
                alt="Omotola Oginni" 
                fill
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Tools Section */}
      <Section width="full" padding="none" className={styles.toolsSection}>
        <div className={styles.toolsRow}>
          <div className={styles.toolItem}>
            <Image src="/icon full color.png" alt="Figma" width={36} height={36} className={styles.toolLogo} />
          </div>
          <div className={styles.toolItem}>
            <span className={styles.toolText}>Figma Make</span>
          </div>
          <div className={styles.toolItem}>
            <Image src="/Google-Antigravity-Lockup-Full-Color.png" alt="Antigravity" width={160} height={28} className={styles.toolLogo} />
          </div>
          <div className={styles.toolItem}>
            <Image src="/claude-color.svg" alt="Claude" width={36} height={36} className={styles.toolLogo} />
          </div>
          <div className={styles.toolItem}>
            <Image src="/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="ChatGPT" width={36} height={36} className={styles.toolLogo} />
          </div>
        </div>
      </Section>

      {/* 5. Experience Section */}
      <Section width="full" padding="none" className={styles.experienceSection}>
        <Typography as="h2" variant="h2">Experience</Typography>
        <div className={styles.sectionDivider} />
        <div className={styles.experienceGrid}>
          <div className={styles.experienceIntro}>
            <Typography as="p" variant="body-large" color="muted">
              I&apos;ve had the opportunity to work with companies like Mainstack and Smarg, as well as collaborate with clients who understand the value of intentional design. Across FinTech and creator platforms, I bring a user-centered approach to every product, whether that&apos;s streamlining a flow, building out a design system, or designing for measurable growth.
            </Typography>
          </div>
          <div className={styles.experienceList}>
            <div className={styles.experienceItem}>
              <span className={styles.expCompany}>Mainstack</span>
              <span className={styles.expRole}>Product Designer</span>
              <span className={styles.expDuration}>March 2025 – June 2026</span>
            </div>
            <div className={styles.experienceItem}>
              <span className={styles.expCompany}>Smarg</span>
              <span className={styles.expRole}>Junior Product Designer</span>
              <span className={styles.expDuration}>May 2024 – February 2025</span>
            </div>
            <div className={styles.experienceItem}>
              <span className={styles.expCompany}>NVIT (New Vision Institute of Technology)</span>
              <span className={styles.expRole}>Intern Product Designer → Junior Product Designer</span>
              <span className={styles.expDuration}>August 2023 – May 2024</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Skills Marquee */}
      <Section width="full" padding="none" className={styles.marqueeSection}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              <span className={styles.marqueeItem}>Product Design</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>UX Strategy</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>UI Design</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Design Systems</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Product Systems Thinking</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Product Design</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>UX Strategy</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>UI Design</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Design Systems</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Product Systems Thinking</span>
            </div>
          </div>
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              <span className={styles.marqueeItem}>AI-assisted Product Workflows</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Interaction Design</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Prototyping</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>End-to-end Product Execution</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>AI-assisted Product Workflows</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Interaction Design</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>Prototyping</span>
              <span className={styles.marqueeDot}>•</span>
              <span className={styles.marqueeItem}>End-to-end Product Execution</span>
            </div>
          </div>
        </div>
      </Section>

      <ContactSection id="contact" />

    </main>
  );
}
