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
                  HELLO! I&apos;M OMOTOLA OGINNI
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
            description="AI Content Repurposing Platform"
            tags={["AI Workflow"]}
            imageUrl="/561shots_so.png"
          />
          <ProjectCard 
            slug="mainstack-refer-earn"
            title="Mainstack"
            description="Referral & Affiliate Platform"
            tags={["Responsive Design"]}
            imageUrl="/25shots_so.png"
          />
          <ProjectCard 
            slug="ambassador-program"
            title="Mainstack"
            description="Creator Growth Platform"
            tags={["Growth Systems"]}
            imageUrl="/200shots_so.png"
          />
          <ProjectCard 
            slug="nbc-trade-fair"
            title="Mainstack"
            description="Event Commerce Platform"
            tags={["Landing Page"]}
            imageUrl="/606shots_so.png"
          />
          <ProjectCard 
            slug="smarg"
            title="SMARG"
            description="Neobank for Creatives"
            tags={["Fintech"]}
            imageUrl="/425shots_so.png"
          />
          <ProjectCard 
            slug="sentinel"
            title="Sentinel"
            description="Infrastructure Monitoring Platform"
            tags={["SaaS"]}
            imageUrl="/162shots_so.png"
          />
        </div>

      </Section>

      {/* 3. About Me Section */}
      <Section id="about" width="full" padding="none" className={styles.aboutSection}>
        <div className={styles.aboutHeader}>
          <Typography as="h2" variant="h2">About me</Typography>
          <div className={styles.sectionDivider} />
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                I&apos;m a Product Designer focused on building scalable, systems-driven digital products across SaaS, fintech, and creator platforms. My work combines product thinking, design systems, AI-powered prototyping, and product development to create intuitive, accessible, and scalable user experiences.
              </Typography>
            </div>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                My approach starts with understanding the product, defining clear requirements, and designing systems that bring structure and consistency from idea to implementation. I enjoy creating experiences that balance user needs with business goals while making products easier to use, maintain, and scale.
              </Typography>
            </div>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                Over the past few years, I&apos;ve designed creator growth experiences, fintech products, AI-enabled products, and commerce solutions, contributing to design systems, responsive interfaces, and product workflows that improve engagement, adoption, and consistency across products.
              </Typography>
            </div>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                I use AI to accelerate product thinking, design exploration, prototyping, and implementation while relying on strong UX principles to guide every decision. By combining structured prompting, thoughtful iteration, design systems, and AI-powered product development, I&apos;m able to move ideas from concept to implementation with speed and consistency.
              </Typography>
            </div>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                I believe great products are built on clear systems, thoughtful collaboration, and continuous improvement. I&apos;m looking to collaborate with forward-thinking startups and teams to design products that create value for users, support business growth, and scale with confidence.
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
