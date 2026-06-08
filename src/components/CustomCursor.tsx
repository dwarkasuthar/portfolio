"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      if (!(target instanceof Element)) return;

      const isInteractive =
        !!target.closest(
          "a, button, input, textarea, select, [role='button']"
        ) || window.getComputedStyle(target).cursor === "pointer";

      setHovering(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{
          x: position.x - (hovering ? 30 : 15),
          y: position.y - (hovering ? 30 : 15),
          width: hovering ? 60 : 30,
          height: hovering ? 60 : 30,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <div
          className="
            w-full h-full
            rounded-full
            border-2 border-violet-500
            bg-violet-500/10
            backdrop-blur-md
          "
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-violet-500 pointer-events-none z-[10000] hidden md:block"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      />
    </>
  );
}