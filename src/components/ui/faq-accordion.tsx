import { ChevronDownIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          className="rounded-3xl border border-[#CDD1DF] bg-white"
          value={item.question}
        >
          <AccordionTrigger className="gap-2 px-3 py-3 text-start text-base font-semibold text-[#2D3035] md:gap-3 md:p-4 md:text-lg">
            <ChevronDownIcon
              strokeWidth={2}
              className="size-6 min-w-6 text-[#0067FF] transition-transform"
              size={24}
            />{' '}
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pt-2 pr-3 pl-11 text-[14px] leading-snug text-[#55618A] md:pr-4 md:pl-13 md:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
