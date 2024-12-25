import { useEffect, useState } from "react";

export default function useTypeWord(completeWords: string, delay: number) {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingWords = setInterval(() => {
      if (words.length === completeWords.length) return;

      setWords((prevWord) => {
        const nextWord = prevWord
          ? prevWord + completeWords[count]
          : completeWords[0];
        setCount(count + 1);

        return nextWord;
      });
    }, delay);

    return () => {
      clearInterval(typingWords);
    };
  });
  return words;
}