"use client";
import DragDrop from "./uploadfile";
import { motion } from "framer-motion";
import SimulateButton from "../simulateButton";
export default function Defender() {
  return (
    <div>
      <motion.div
        className="grid place-items-center h-screen bg-gradient-to-t from-gray-400 to-white p-8 sm:p-20 font-[var(--font-geist-sans)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <DragDrop />
      </motion.div>
    </div>
  );
}
