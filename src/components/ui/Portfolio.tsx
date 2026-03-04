import Image from "next/image";

const portfolioItems = [
  { id: 1, src: "/portfolio-1.png", alt: "Signature Hair Color", category: "Hair Artistry" },
  { id: 2, src: "/portfolio-2.png", alt: "Editorial Nail Design", category: "Nail Art" },
  { id: 3, src: "/portfolio-3.png", alt: "Advanced Skincare Result", category: "Esthetics" },
];

export default function Portfolio() {
  return (
    <section id="gallery" className="py-24 bg-salon-bg px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.3em] text-[10px] text-salon-mutedGold mb-4 font-medium">The Gallery</p>
            <h2 className="text-4xl md:text-6xl font-serif text-salon-text">The Art of Lumière.</h2>
          </div>
          <button className="text-xs uppercase tracking-widest font-medium border-b border-salon-text pb-1 hover:text-salon-mutedGold hover:border-salon-mutedGold transition-all">
            View All Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-[500px] w-full overflow-hidden rounded-sm mb-6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  // Mobile: full width, Desktop: 1/3 of container
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-salon-mutedGold mb-2">{item.category}</p>
              <h3 className="text-xl font-serif text-salon-text">{item.alt}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}