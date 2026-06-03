"use client";

import React, { useEffect, useState } from 'react';
import styles from './LiveStatus.module.css';

const LOCATION = 'Lagos';
const TIMEZONE = 'Africa/Lagos';

function formatLagosTime(): string {
  try {
    return new Intl.DateTimeFormat('en-NG', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: TIMEZONE,
    }).format(new Date());
  } catch {
    return '--:--';
  }
}

export const LiveStatus = () => {
  const [time, setTime] = useState(formatLagosTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatLagosTime());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={styles.status}>
      <span className={styles.location}>{LOCATION}</span>
      <span className={styles.separator} aria-hidden="true">*</span>
      <time className={styles.time} dateTime={time}>{time}</time>
    </span>
  );
};
