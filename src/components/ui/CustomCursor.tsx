"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      let el = e.target;
      let found = false;
      while (el && el instanceof Element) {
        if (el.hasAttribute("data-cursor-hover")) {
          found = true;
          break;
        }
        el = el.parentElement;
      }
      setHovering(found);
    };

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, [isTouch]);

  if (isTouch || !visible) return null;

  return (
    <div
      className={`${styles.cursor} ${hovering ? styles.hovering : ""}`}
      style={{ left: pos.x, top: pos.y }}
    >
      <span className={styles.label}>View Project</span>
    </div>
  );
};
