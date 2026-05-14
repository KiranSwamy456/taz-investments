import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Studio() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8 block">OUR STUDIO</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight max-w-4xl">
            We ship like machines but hug like humans.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI, Fintech, Medtech — you name it. While we are trailblazing design in emerging industries, we are not yes-men or rubber stamps. The best partners are those who challenge your thinking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image src="/team-1.jpg" alt="Team working" fill className="object-cover" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md rounded-full text-white">BUSINESS AS USUAL</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image src="/team-2.jpg" alt="Team celebrating" fill className="object-cover" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md rounded-full text-white">{"WINE'S GOOD"}</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
              <Image src="/team-3.jpg" alt="WaysConf" fill className="object-cover" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md rounded-full text-white">{"XOXO WAYSCONF '23"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-6">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              We do not just build products: we build leverage. Each detail, from pixel to code, is a force multiplier for your vision. You will work with a team grounded in reality but not afraid to voice game-changing perspectives.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-32">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors">
            Meet the gang <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight text-muted-foreground">
            {'"Always open to new nodes in our network, we focus our energy on what truly excites us, leveraging our expertise and passion. This, as a result, skyrockets your big idea."'}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
