"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SimulateButton from "./simulateButton";
import { motion } from "framer-motion";
import useTypeWord from "../hooks/useTypeWord";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [showInitial, setShowInitial] = useState(false);
  const [hasSeenAnimation, setHasSeenAnimation] = useState(true);


  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (!hasVisited) {
      setHasSeenAnimation(false);
      setShowInitial(true);
      localStorage.setItem("hasVisitedBefore", "true");
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowInitial(false);
      setTimeout(() => {
        setHasSeenAnimation(true);
      }, 1000);
    }, 3500);
  };

  return (
    <>
      {hasSeenAnimation && (
        <motion.div
          className="grid place-items-center h-screen bg-gradient-to-t from-gray-400 to-white p-8 sm:p-20 font-[var(--font-geist-sans)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              딥페이크 방지하는 좋은 선택, 3HP
            </h1>
            <p className="text-lg text-gray-600">
              인물 이미지, 생성 이미지의 딥페이크를 막아주는 3HP
            </p>
            <SimulateButton />
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
        </motion.div>
      )}
    </>
  );
}
