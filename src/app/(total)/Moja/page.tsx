"use client"; // 파일 최상단에 선언

import React from "react"; // React import
import { motion } from "framer-motion"; // framer-motion import

const Moja: React.FC = () => {
  return (
    <div>
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
            인물 이미지, 생성 이미지의 딥페이크를 막아주는 3HP
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Moja;
