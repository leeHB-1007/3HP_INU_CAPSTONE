"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InitialAnimate from "./initialAnimate";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <div className="">
      {!isAnimationComplete && (
        <InitialAnimate onComplete={() => setIsAnimationComplete(true)} />
      )}
      {isAnimationComplete && (
        <>
          <header className="flex gap-6 items-center justify-between sticky top-0 w-full z-50 box-border py-6 px-20 h-20 bg-white shadow-md">
            <Link href={"/"} className="font-bold text-4xl font-lobster">
              3HP
              {/* 더꾸미기 */}
            </Link>
            <section className="flex gap-8">
              <Link href={"/"}>HOME</Link>
              <Link href={"/Defender"}>딥페이크 방지</Link>
              <Link href={"/Moja"}>모자이크</Link>
              <Link href={"/Bg"}>배경 바꾸기</Link>
            </section>
            <section className="flex gap-9 items-center">
              <Link href={"/"}>다른 기능</Link>
              <Button variant="outline" className="bg-black text-white">
                Button
              </Button>
            </section>
          </header>
          <main>{children}</main>
          <footer className="bg-gray-400">
            @3HP제작
            {/* 푸터 더 꾸미기 */}
          </footer>
        </>
      )}
    </div>
  );
}
