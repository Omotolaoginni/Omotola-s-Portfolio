"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch] = useState(() => 
    typeof window !== 'undefined' && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

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
    return () => document.removeEventListener("mousemove", onMove);
  }, [isTouch, visible]);

  if (isTouch) return null;

  return (
    <div
      className={`${styles.cursor} ${hovering ? styles.hovering : ""}`}
      style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
    >
      {hovering && <span className={styles.label}>View Project</span>}
    </div>
  );
};
