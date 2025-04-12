"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import useTypeWord from "../hooks/useTypeWord";

type InitialAnimateProps = {
  onComplete: () => void;
};

export default function InitialAnimate({ onComplete }: InitialAnimateProps) {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();
  const hasCompleted = useRef(false);
  const onBoardText = useTypeWord("Defend Your Photos", 45);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        setShowInitialMessage(false);
        controls.start("visible");
        document.body.style.overflow = "";
        onComplete();
      }
    }, 2700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [controls, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {showInitialMessage && (
        <motion.div 
          className="fixed inset-0 flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-t from-gray-400 to-white p-8 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: {
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }
          }}
        >
          <motion.p
            className="text-xl text-center md:text-4xl font-ghanachocolate text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0,
              y: -50,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
            transition={{ duration: 0.8 }}
          >
            {onBoardText}
          </motion.p>
          <motion.span
            className="text-lg text-center sm:text-base md:text-xl font-scoreRegular mt-6 text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0,
              y: -50,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            안녕하세요 인천대학교 컴퓨터공학부 캡스톤 디자인{" "}
            <span className="font-bold">3HP</span>조 입니다.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}