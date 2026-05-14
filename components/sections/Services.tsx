"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">OUR SERVICES</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight max-w-4xl mb-24">
          Design is the API between <span className="italic font-serif text-accent">vision</span> and reality. Consider us <span className="italic font-serif">your gateway</span>.
        </h2>

        <div className="max-w-4xl ml-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border py-4">
              <AccordionTrigger className="text-2xl md:text-4xl font-display font-medium hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-4">
                  <span className="text-accent">{"↳"}</span> Product Design
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pl-12 pb-8 max-w-2xl">
                We craft intuitive, scalable product experiences that users love. From wireframes to high-fidelity prototypes, we ensure every interaction serves your core business goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-border py-4">
              <AccordionTrigger className="text-2xl md:text-4xl font-display font-medium hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-4">
                  <span className="text-accent">{"↳"}</span> Websites
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pl-12 pb-8 max-w-2xl">
                High-performance marketing sites that convert. We blend compelling brand narrative with cutting-edge web development to make your first impression unforgettable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-border py-4">
              <AccordionTrigger className="text-2xl md:text-4xl font-display font-medium hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-4">
                  <span className="text-accent">✳</span> Branding
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pl-12 pb-8 max-w-2xl">
                Visual identity systems that scale. We define your brand's DNA — from logos and typography to motion language and voice — ensuring consistency across every touchpoint.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-border py-4">
              <AccordionTrigger className="text-2xl md:text-4xl font-display font-medium hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-4">
                  <span className="text-accent">{"▷"}</span> No-code Development
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pl-12 pb-8 max-w-2xl">
                Rapid deployment using tools like Webflow and Framer. We bridge the gap between design and development, launching robust sites in a fraction of the traditional time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-border py-4">
              <AccordionTrigger className="text-2xl md:text-4xl font-display font-medium hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:rotate-180">
                <span className="flex items-center gap-4">
                  <span className="text-accent">○</span> Engineering
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pl-12 pb-8 max-w-2xl">
                Full-stack implementation for complex requirements. Our engineering partners bring the most demanding technical visions to life with clean, maintainable architecture.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
