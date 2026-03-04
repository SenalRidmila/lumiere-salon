import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 w-full bg-salon-bg flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">

        {/* Left: Extreme Typography */}
        <div className="w-full md:w-1/2 z-20 pt-6 md:pt-0">
          <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] text-salon-charcoal/60 mb-6 md:mb-8 animate-fade-in font-medium">
            The Signature Experience
          </p>

          {/* අකුරු Mobile එකට text-6xl සහ Desktop එකට 7.5rem විදියට හැදුවා */}
          <h1 className="text-6xl md:text-[7.5rem] font-serif leading-[0.9] md:leading-[0.85] text-salon-text tracking-tighter mb-6 md:mb-8 animate-slide-up">
            Quiet <br />
            <span className="italic font-light text-salon-mutedGold">Luxury.</span>
          </h1>

          <p className="text-salon-charcoal max-w-sm text-sm leading-relaxed md:leading-loose mb-10 md:mb-12 animate-fade-in font-sans font-light" style={{ animationDelay: '0.2s' }}>
            We strip away the unnecessary to reveal your most authentic, elevated self. A sanctuary where precision meets tranquility.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="group relative pb-2 overflow-hidden">
              <span className="uppercase tracking-[0.2em] text-xs font-medium text-salon-text">
                Reserve a Session
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-salon-mutedGold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-salon-text/10"></span>
            </button>
          </div>
        </div>

        {/* Right: Clean, High-Fashion Imagery */}
        <div className="w-full md:w-1/2 h-[55vh] md:h-[75vh] relative flex justify-end items-center animate-fade-in mt-4 md:mt-0" style={{ animationDelay: '0.3s' }}>
          
          {/* Main Clean Image Box - Mobile එකේදී පොඩි image එකට ඉඩ තියලා w-[90%] කළා */}
          <div className="w-[90%] md:w-full h-full relative overflow-hidden bg-salon-champagne rounded-sm shadow-xl ml-auto">
            <Image
              src="/hero-main.png" 
              alt="Luxury salon interior"
              fill
              priority
              // Mobile: 90vw, Desktop: 50vw - browser ට exact size කිව්වාම correct image download කරනවා
              sizes="(max-width: 768px) 90vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-[3s] ease-out grayscale-[15%]" 
            />
          </div>

          {/* Offset floating detail - දැන් Mobile එකෙත් පේනවා! */}
          {/* Mobile එකේදී bottom-left වලටත්, Desktop එකේදී middle-left වලටත් position කළා */}
          <div className="absolute -bottom-6 left-0 md:top-1/4 md:-left-12 lg:-left-16 w-32 h-44 md:w-48 md:h-64 bg-white shadow-xl md:shadow-2xl p-1.5 md:p-2 animate-slide-up rounded-sm z-30" style={{ animationDelay: '0.6s' }}>
            <div className="w-full h-full relative bg-salon-champagne">
               <Image
                  src="/hero-detail.png" 
                  alt="Salon detail close-up"
                  fill
                  // Fixed size floating card - browser ට exact px size කිව්වා
                  sizes="(max-width: 768px) 128px, 192px"
                  className="object-cover grayscale-[10%]"
                />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}