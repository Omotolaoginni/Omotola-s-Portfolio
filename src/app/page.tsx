import styles from "./page.module.css";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Section width="full" padding="none" className={styles.heroSection}>

        {/* Decorative ambient background — non-interactive, aria-hidden */}
        <div className={styles.heroAccentEllipse} aria-hidden="true" />

        {/* Hero stage — heading ABOVE portrait */}
        <div className={styles.heroStage}>

          {/* Introductory Badge — gradient border, centered */}
          <div className={styles.heroBadgeRow}>
            <div className={styles.heroBadgeGradientRing}>
              <div className={styles.heroBadgeGradientInner}>
                HELLO! I AM OMOTOLA OGINNI
              </div>
            </div>
          </div>

          {/* Full H1 heading sits above image */}
          <h1 className={styles.heroHeadingFull}>
            Product Designer<br />& Engineer
          </h1>

          {/* Portrait container below heading */}
          <div className={styles.heroPortraitWrapper}>
            <div className={styles.heroPortrait}>
<Image 
                src="/my-photo 2.png" 
                alt="Omotola Oginni" 
                fill
                className={styles.heroImage}
                priority
              />
            </div>
          </div>

        </div>

        {/* Sub-copy — below the stage */}
        <div className={styles.heroFooter}>
          <Typography as="p" variant="body-large" color="muted" className={styles.heroSubtitle}>
            I design and build scalable digital products across fintech and creator platforms, using design systems and AI-powered workflows to improve engagement and monetization.
          </Typography>
        </div>

        {/* Tool marquee — full section width */}
        <div className={styles.heroToolMarquee}>
          <div className={styles.heroToolMarqueeTrack}>
            <span className={styles.heroToolItem}><Image src="/icon full color.png" alt="Figma" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><span className={styles.toolTextLabel}>Figma Make</span></span>
            <span className={styles.heroToolItem}><Image src="/Google-Antigravity-Lockup-Full-Color.png" alt="Antigravity" width={180} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/opencode-wordmark-light.png" alt="OpenCode" width={140} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="ChatGPT" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/gemini-color.svg" alt="Gemini" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/claude-color.svg" alt="Claude" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/icon full color.png" alt="Figma" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><span className={styles.toolTextLabel}>Figma Make</span></span>
            <span className={styles.heroToolItem}><Image src="/Google-Antigravity-Lockup-Full-Color.png" alt="Antigravity" width={180} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/opencode-wordmark-light.png" alt="OpenCode" width={140} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="ChatGPT" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/gemini-color.svg" alt="Gemini" width={32} height={32} className={styles.toolLogoImage} /></span>
            <span className={styles.heroToolItem}><Image src="/claude-color.svg" alt="Claude" width={32} height={32} className={styles.toolLogoImage} /></span>
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
            title="ContentSplit - AI Content Repurposing Engine"
            description="An AI-powered workflow tool that transforms long-form content into platform, ready posts for Twitter/X, LinkedIn, Instagram, and Email, helping creators publish faster with consistent tone across channels."
            tags={["AI Workflow Design", "Design Systems", "Creator Tools", "Content Automation"]}
            imageUrl="/499shots_so.png"
          />
          <ProjectCard 
            slug="creator-platform"
            title="Mainstack — Referral &amp; Affiliate Experience"
            description="Creator-focused referral and affiliate experience designed to help users discover products, promote creator businesses, and earn recurring commissions through a seamless cross-device workflow."
            tags={["Responsive Design", "Mobile UI Design", "Mobile UI Design", "Visual Collaboration"]}
            imageUrl="/841shots_so 2.png"
          />
          <ProjectCard 
            slug="project-three"
            title="Mainstack — Ambassador Growth Program Experience"
            description="A structured ambassador program designed to enable creators to drive product-led growth through referrals, track performance, and earn recurring rewards within a seamless, incentive-driven ecosystem. The experience focuses on clarity of earning pathways, simplified referral tracking, and motivating sustained user engagement."
            tags={["UX Strategy", "Growth Systems Design", "Conversion Design", "Product Design"]}
            imageUrl="/502shots_so.png"
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
