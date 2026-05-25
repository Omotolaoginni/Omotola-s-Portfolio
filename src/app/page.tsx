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

          {/* Scroll Hint Visual Affordance */}
          <div className={styles.scrollHint}>
            <span className={styles.scrollHintText}>Scroll</span>
            <span className={styles.scrollHintArrow}>↓</span>
          </div>
        </div>

      </Section>

      {/* 2. Selected Projects Section */}
      <Section width="full" padding="none" className={styles.projectsSection} id="work">
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
            tags={["Responsive Design", "Mobile UI Design", "Visual Collaboration"]}
            imageUrl="/436shots_so.png"
          />
          <ProjectCard 
            slug="project-three"
            title="Mainstack — Ambassador Growth Program Experience"
            description="A structured ambassador program designed to enable creators to drive product-led growth through referrals, track performance, and earn recurring rewards within a seamless, incentive-driven ecosystem. The experience focuses on clarity of earning pathways, simplified referral tracking, and motivating sustained user engagement."
            tags={["UX Strategy", "Growth Systems Design", "Conversion Design", "Product Design"]}
            imageUrl="/502shots_so.png"
          />
          <ProjectCard 
            slug="project-four"
            title="NBC Trade Fair — Landing Page &amp; Commerce Onboarding Experience"
            description="A conversion-focused landing page designed for a large-scale trade fair commerce platform, enabling vendors and participants to seamlessly onboard into a digital dashboard. The experience guided users from event discovery into account creation, where they could manage product listings, process online orders, and accept POS payments through an integrated commerce system powered by Mainstack."
            tags={["Landing Page Design", "Payment System Design", "Conversion Funnel Design"]}
            imageUrl="/126shots_so.png"
          />
          <ProjectCard 
            slug="project-five"
            title="Smarg – Neobank for African Creatives"
            description="A modern mobile banking experience designed for African creatives, freelancers, and digital entrepreneurs, combining financial automation, flexible credit access, and device financing to help users manage cash flow, invest in essential tools, and grow sustainable creative careers without heavy upfront financial pressure."
            tags={["Fintech Product Design", "Creator Economy", "Financial Automation"]}
            imageUrl="/813shots_so.png"
          />
          <ProjectCard 
            slug="sentinel"
            title="Sentinel — Third-Party Service Monitoring &amp; Alerting"
            description="A monitoring service that tracks third-party software and API uptime in real time, helping engineering teams detect outages early and receive instant alerts through their preferred notification channels to prevent costly system disruptions."
            tags={["SaaS Platform", "API &amp; Dependency Tracking", "Incident Monitoring", "Enterprise UX"]}
            imageUrl="/707shots_so.png"
          />
        </div>
        <div className={styles.sectionDivider} />
      </Section>

      {/* 3. About Me Section */}
      <Section id="about" width="full" padding="none" className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <Typography as="h2" variant="h2" className={styles.aboutTitle}>About Me</Typography>
            <div className={styles.aboutNarrative}>
              <Typography as="p" variant="body-large" color="muted">
                I'm a product designer focused on building scalable, systems-driven digital products across UX, UI, and design systems. I use AI to accelerate product thinking and execution, while staying grounded in strong UX principles to ensure clarity and usability in complex workflows. My work is centered on designing structured, consistent experiences where design systems provide the foundation for coherence, especially when working with AI-assisted tools.
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
        <div className={styles.sectionDivider} />
      </Section>

      {/* 4. Experience Section */}
      <Section width="full" padding="none" className={styles.experienceSection}>
        <Typography as="h2" variant="h2" className={styles.experienceTitle}>Experience</Typography>
        <div className={styles.experienceGrid}>
          <div className={styles.experienceIntro}>
            <Typography as="p" variant="body-large" color="muted">
              I've had the opportunity to work with companies like Mainstack and Smarg, as well as collaborate with clients who understand the value of intentional design. Across FinTech and creator platforms, I bring a user-centered approach to every product, whether that's streamlining a flow, building out a design system, or designing for measurable growth.
            </Typography>
          </div>
          <div className={styles.experienceList}>
            <div className={styles.experienceItem}>
              <span className={styles.expCompany}>Mainstack</span>
              <span className={styles.expRole}>Product Designer</span>
              <span className={styles.expDuration}>March 2025 – Present</span>
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

      {/* 5. Skills Marquee */}
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

      {/* 6. Contact Me Section */}
      <Section id="contact" width="full" padding="none" className={styles.contactSection}>
        <div className={styles.contactMarquee}>
          <div className={styles.contactMarqueeTrack}>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
            <span className={styles.contactMarqueeText}>Let's work together</span>
            <span className={styles.contactMarqueeDot}>•</span>
          </div>
        </div>
        <div className={styles.contactCta}>
          <Button href="mailto:patience.oginni@gmail.com" variant="primary">Contact Me</Button>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactLinks}>
            <div className={styles.contactSocials}>
              <a href="https://www.behance.net/omotolaolatejuoginni" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Behance</a>
              <a href="https://www.linkedin.com/in/omotolaolatejuoginni/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
              <a href="https://docs.google.com/document/d/1aBhZ6sg49tFvuqVxjYqIfrH2tpYkNEadeubp_Ez4Hzo/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Resume</a>
            </div>
            <a href="mailto:patience.oginni@gmail.com" className={`${styles.contactLink} ${styles.contactLinkEmail}`} aria-label="Send email to patience.oginni@gmail.com">hello@omotola.com</a>
          </div>
          <div className={styles.contactMessage}>
            <Typography as="p" variant="body-lg" color="inherit" className={styles.contactCtaText}>
              Currently open to new roles and projects.<br />
              If you’re building something meaningful and need a product designer to sweat the details, I would love to be part of the conversation.
            </Typography>
            
            <a href="#" className={styles.backToTop} aria-label="Scroll to top of page">
              Back to top ↑
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
