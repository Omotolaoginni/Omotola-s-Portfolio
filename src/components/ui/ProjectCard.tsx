"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export const ProjectCard = ({ slug, title, description, imageUrl }: ProjectCardProps) => {
  return (
      <div
        className={styles.wrapper}
      >
      <Link href={`/projects/${slug}`} className={styles.card}>
        <div className={styles.imageContainer}>
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.image} style={{ objectFit: 'cover' }} />
          ) : (
            <div className={styles.placeholder} />
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};