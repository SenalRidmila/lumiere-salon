export default function SocialProof() {
  const pressNames = ["VOGUE", "ELLE", "VANITY FAIR", "HARPER'S BAZAAR", "ALLURE", "GQ", "MARIE CLAIRE"];

  return (
    <section id="review" className="py-24 bg-salon-bg border-t border-salon-mutedGold/10 overflow-hidden scroll-mt-20">
      <div className="mb-32">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-salon-charcoal/60 mb-10 font-medium">
          Recognized By Industry Leaders
        </p>
        
        <div className="relative flex items-center h-16 w-full">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-salon-bg to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-salon-bg to-transparent z-10"></div>

          <div className="flex animate-marquee w-max">
            {[...pressNames, ...pressNames, ...pressNames].map((name, index) => (
              <span 
                key={index} 
                className="mx-12 md:mx-16 text-xl md:text-2xl font-serif tracking-widest text-salon-charcoal/40 uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-[10px] text-salon-mutedGold mb-8 font-medium">
          Client Narratives
        </p>
        
        <h2 className="text-3xl md:text-5xl font-serif text-salon-text leading-snug mb-12">
          "An absolute sanctuary. The attention to detail and the level of bespoke care I received was nothing short of transformative. It’s not just a salon; it’s an experience."
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-[1px] bg-salon-mutedGold mb-6"></div>
          <p className="text-xs tracking-[0.2em] uppercase text-salon-charcoal font-medium">
            Elena V.
          </p>
          <p className="text-[10px] tracking-widest uppercase text-salon-charcoal/50 mt-2">
            Verified Guest
          </p>
        </div>
      </div>
    </section>
  );
}