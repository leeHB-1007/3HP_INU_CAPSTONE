"use client"; // 파일 최상단에 선언

import React, { useEffect, useRef, useState } from "react"; // React import
import { motion } from "framer-motion"; // framer-motion import
import { animate, createScope, createSpring, createDraggable } from "animejs";
import reactLogo from "/vercel.svg"; // React logo import

const Moja = () => {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add((scope) => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate(".logo", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 100 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 2500,
      });

      // Make the logo draggable around its center
      createDraggable(".logo", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      // Register function methods to be used outside the useEffect
      scope.add("rotateLogo", (i) => {
        animate(".logo", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  const handleClick = () => {
    const i = rotations + 1;
    setRotations(i);
    // Animate logo rotation on click using the method declared inside the scope
    scope.current.methods.rotateLogo(i);
  };

  return (
    <div ref={root}>
      <motion.div
        className="grid place-items-center h-screen bg-gradient-to-t from-gray-400 to-white p-8 sm:p-20 font-[var(--font-geist-sans)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            모자이크 방지 기술
          </h1>
          <p className="text-lg text-gray-600">
            인물 이미지, 생성 이미지의 딥페이크를 막아주는 3HP입니다
          </p>
        </div>

        <section>
          <div ref={root}>
            <div className="large centered row">
              <img src="/vercel.svg" className="logo react" alt="React logo" />
            </div>
            <div className="medium row">
              <fieldset className="controls">
                <button onClick={handleClick}>rotations: {rotations}</button>
              </fieldset>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Moja;
