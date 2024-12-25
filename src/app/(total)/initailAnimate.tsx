"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, Variants, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import useTypeWord from "@/app/hooks/useTypeWord";

export default function InitialAnimate() {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();

  const onBoardText = useTypeWord("딥페이크를 막기 위한 최고의 선택", 45);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowInitialMessage(false);
      controls.start("visible");
      document.body.style.overflow = "";
    }, 2700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [controls]);

  useEffect(() => {
    if (!showInitialMessage) {
      controls.start("visible");
    }
  }, [showInitialMessage, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
  };

  const messageItemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.8,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showInitialMessage && (
          <motion.div
            className="flex flex-col justify-center items-center w-screen h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl text-center md:text-4xl font-ghanachocolate text-stone-800">
              {onBoardText}
            </p>
            <motion.span
              className="text-lg text-center sm:text-base md:text-xl font-scoreRegular mt-6 text-stone-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              인천대학교 컴퓨터공학부 캡스톤 디자인 <span className="font-bold">3HP</span>조
              입니다.
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
