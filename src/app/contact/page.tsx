"use client";

import { useRef, useState, type FormEvent } from "react";
import { Section } from "@/components/layout/Section";
import { Typography } from "@/components/ui/Typography";
import { ContactSection } from "@/components/layout/ContactSection";
import styles from "./page.module.css";

const PROJECT_OPTIONS = [
  "Product Design (SaaS / Apps / Systems)",
  "Web Design (Marketing / Landing Pages)",
  "Mobile App Design (iOS / Android interfaces)",
  "UI/UX Audit (Improvement & review)",
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (option: string) => {
    setSelectedTypes((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: selectedTypes,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
      setSelectedTypes([]);

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className={styles.page}>
      <Section width="full">
        <div className={styles.headingBlock}>
          <h1 className={styles.contactHeading}>
            Contact Me
          </h1>
          <hr className={styles.headingDivider} />
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.leftCol}>
            <Typography as="p" variant="body-large" className={styles.contactSubtext}>
              I&rsquo;m looking forward to hearing from you. If you prefer not to fill the form, feel free to email me directly and talk to me about the next big thing.
            </Typography>
            <a
              href="mailto:patience.oginni@gmail.com"
              className={styles.contactEmailLink}
            >
              hello@omotola.com
            </a>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.formCard}>
            <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.formLabel}>Full name</label>
                <input id="name" name="name" type="text" placeholder="Enter your name" className={styles.formInput} required />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.formLabel}>Email address</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" className={styles.formInput} required />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>What your project is about</label>
                <div className={styles.checkboxGroup}>
                  {PROJECT_OPTIONS.map((option) => (
                    <label key={option} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        className={styles.checkboxInput}
                        checked={selectedTypes.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                      />
                      <span className={styles.checkboxControl}>
                        <svg className={styles.checkboxIcon} viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className={styles.checkboxText}>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className={styles.formField}>
                <label htmlFor="budget" className={styles.formLabel}>Budget</label>
                <input id="budget" name="budget" type="text" placeholder="Example: $1,000 – $5,000" className={styles.formInput} />
              </div>
              <div className={styles.formField}>
                <label htmlFor="message" className={styles.formLabel}>Share more details</label>
                <textarea id="message" name="message" placeholder="Describe what you need" className={styles.formTextarea} rows={4} required />
              </div>

              {status === "success" && (
                <div className={`${styles.formMessage} ${styles.formMessageSuccess}`}>Message sent successfully!</div>
              )}
              {status === "error" && (
                <div className={`${styles.formMessage} ${styles.formMessageError}`}>{errorMessage}</div>
              )}

              <button type="submit" className={styles.formSubmit} disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <ContactSection />
    </div>
  );
}
