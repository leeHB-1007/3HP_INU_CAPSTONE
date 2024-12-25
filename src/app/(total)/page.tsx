import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
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
          src=""
          alt="딥페이크 방지"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>정말 딥페이크 방지가 가능한가요?1</AccordionTrigger>
            <AccordionContent>
              아직 미정1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>어떻게 딥페이크 방지가 가능한가요?2</AccordionTrigger>
            <AccordionContent>
              아직 미정2
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
