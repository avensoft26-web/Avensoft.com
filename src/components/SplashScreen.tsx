"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Lock background scrolling while full screen splash is active
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Exactly 4 seconds display
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    }, 4000);

    // Escape key listener to dismiss early if needed
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        if (typeof window !== "undefined") {
          document.body.style.overflow = "";
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="avensoft-splash-clean"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 w-screen h-screen z-[999999] flex items-center justify-center bg-[#000000] text-white select-none overflow-hidden cursor-default"
          onClick={handleDismiss}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[500px] h-[500px] bg-amber-500/[0.12] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute w-[380px] h-[380px] bg-cyan-500/[0.08] rounded-full blur-[120px] pointer-events-none" />

          {/* Only Avensoft Logo and Name */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: [0.85, 1, 1.03],
              opacity: 1,
            }}
            transition={{
              scale: { duration: 4.0, ease: "easeOut" },
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
            className="relative z-10 flex flex-col items-center justify-center px-6"
          >
            <img
              src="/Avensoft.com/AVENSOFT-dark-theme.png"
              alt="Avensoft"
              className="h-36 sm:h-44 md:h-52 lg:h-56 w-auto object-contain drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
