import { SiSupabase, SiOkta, SiTwilio, SiAuth0, SiDatabricks } from "react-icons/si";

export function ClientLogos() {
  return (
    <section className="py-24 px-6 md:px-12 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold tracking-tighter">a16z/speedrun</span>
            <span className="text-xl font-mono tracking-widest uppercase">EXTROPIC</span>
            <span className="text-xl font-display font-medium">LlamaIndex</span>
            <span className="text-xl font-bold">{"oo&n8n"}</span>
            <span className="text-xl font-serif italic">LangChain</span>
            <SiSupabase className="w-8 h-8" />
            <SiOkta className="w-8 h-8" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-serif lowercase">clay</span>
            <span className="text-xl font-bold tracking-tight">Retool</span>
            <span className="text-xl font-mono uppercase tracking-widest">SPEAKEASY</span>
            <span className="text-xl font-display font-bold">MaintainX</span>
            <span className="text-xl font-sans font-black tracking-tighter uppercase">MERITECH</span>
            <SiDatabricks className="w-8 h-8" />
            <SiTwilio className="w-8 h-8" />
            <span className="text-xl font-medium tracking-tight">segment</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-sans font-bold text-orange-500">ORANGE</span>
            <span className="text-xl font-mono lowercase">einride</span>
            <span className="text-xl font-display italic">colossal*</span>
            <span className="text-xl font-serif">Gem</span>
            <span className="text-xl font-bold tracking-tighter text-blue-400">supermemory*</span>
            <span className="text-xl font-sans uppercase font-medium">Guardrails AI</span>
            <span className="text-xl font-serif">Common Room</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-sans font-black uppercase tracking-widest">METRONOME</span>
            <span className="text-xl font-serif italic text-pink-400">Letta</span>
            <SiAuth0 className="w-8 h-8" />
            <span className="text-xl font-display font-bold text-red-500 uppercase tracking-tighter">CHILI PIPER</span>
            <span className="text-xl font-sans font-medium text-green-400">CloudKitchens</span>
          </div>
        </div>
      </div>
    </section>
  );
}
