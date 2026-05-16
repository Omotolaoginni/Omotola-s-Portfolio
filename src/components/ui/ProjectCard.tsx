"use client";
import React, { useRef, useState } from 'react';
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = wrapperRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    setVisible(true);
  };

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      onPointerMove={handleMove}
      onPointerLeave={() => setVisible(false)}
    >
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
      <span
        className={styles.viewProject}
        style={{
          display: visible ? 'block' : 'none',
          left: pos.x + 'px',
          top: pos.y + 'px',
        }}
      >
        View Project
      </span>
    </div>
  );
};