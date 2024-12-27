"use client";

import { useState, useEffect } from "react";
import InitialAnimate from "./initialAnimate";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import useTypeWord from "../hooks/useTypeWord";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
    const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();

  const onBoardText = useTypeWord("I find joy in what I do.", 45);

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
      {!showInitialMessage && (
            <AnimatePresence>
            {showInitialMessage && (
              <motion.div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-t from-gray-400 to-white p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <motion.p
                    className="text-xl text-center md:text-4xl font-ghanachocolate text-stone-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {onBoardText}
                  </motion.p>
                  <motion.span
                    className="text-lg text-center sm:text-base md:text-xl font-scoreRegular mt-6 text-stone-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    안녕하세요 인천대학교 컴퓨터공학부 캡스톤 디자인{" "}
                    <span className="font-bold">3HP</span>조 입니다.
                  </motion.span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
      )}
      {!showInitialMessage && (
        <div className="grid place-items-center h-screen bg-gradient-to-t from-gray-400 to-white p-8 sm:p-20 font-[var(--font-geist-sans)]">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              딥페이크 방지하는 좋은 선택, 3HP
            </h1>
            <p className="text-lg text-gray-600">
              인물 이미지, 생성 이미지의 딥페이크를 막아주는 3HP
            </p>
            <Button variant="outline" className="bg-black text-white">
              체험하러 가기
            </Button>
          </div>
          <Image
            src="/iphone.png"
            alt="딥페이크 방지"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                정말 딥페이크 방지가 가능한가요?
              </AccordionTrigger>
              <AccordionContent>아직 미정</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                어떻게 딥페이크 방지가 가능한가요?
              </AccordionTrigger>
              <AccordionContent>아직 미정</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  );
}
