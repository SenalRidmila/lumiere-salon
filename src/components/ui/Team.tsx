import Image from "next/image";

const team = [
  { name: "Julianne Moore", role: "Creative Director", image: "/team-1.png" },
  { name: "Sasha Banks", role: "Master Esthetician", image: "/team-2.png" },
  { name: "David Chen", role: "Senior Stylist", image: "/team-3.png" },
];

export default function Team() {
  return (
    <section id="artisans" className="py-24 bg-salon-bg px-6 border-t border-salon-mutedGold/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-[10px] text-salon-mutedGold mb-4 font-medium">Expertise</p>
        <h2 className="text-4xl md:text-6xl font-serif text-salon-text mb-16">The Artisans.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-48 h-64 md:w-64 md:h-80 mb-8 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  loading="lazy"
                  // Mobile: w-48 = 192px, Desktop: w-64 = 256px
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-salon-text mb-2">{member.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-salon-charcoal/60">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}