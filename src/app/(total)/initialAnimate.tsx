import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import useTypeWord from "../hooks/useTypeWord";

type InitialAnimateProps = {
  onComplete: () => void; // 콜백 함수 타입 정의
};

export default function InitialAnimate({ onComplete }: InitialAnimateProps) {
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const controls = useAnimation();
  const hasCompleted = useRef(false); // 중복 실행 방지용 Ref
  const onBoardText = useTypeWord("Defend Your Photos", 45);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      if (!hasCompleted.current) {
        hasCompleted.current = true; // 실행 완료 플래그 설정
        setShowInitialMessage(false);
        controls.start("visible");
        document.body.style.overflow = "";
        onComplete(); // 애니메이션 완료 알림
      }
    }, 2700);

    return () => {
      clearTimeout(timer); // 타이머 정리
      document.body.style.overflow = "";
    };
  }, [controls, onComplete]);

  return (
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
  );
}
