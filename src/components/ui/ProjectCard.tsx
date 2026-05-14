import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { Badge } from './Badge';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export const ProjectCard = ({ slug, title, description, tags, imageUrl }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className={styles.image} />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};
