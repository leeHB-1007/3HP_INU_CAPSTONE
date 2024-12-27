"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
export default function SimulateButton() {
    const router = useRouter();
    const onClickButton = () => {
        //defender 페이지로 이동
        router.push("/Defender");
    }
  return (
    <Button variant="outline" onClick={onClickButton} className="bg-black text-white">
      체험하러 가기
    </Button>
  );
}
