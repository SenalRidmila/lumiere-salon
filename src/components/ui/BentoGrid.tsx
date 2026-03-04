import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Hair Artistry",
    description: "Precision cuts, bespoke color, and transformative treatments.",
    image: "/service-hair.png",
    span: "md:col-span-2 md:row-span-2",
    href: "/services/hair",
  },
  {
    title: "Advanced Esthetics",
    description: "Clinical skincare and facial rejuvenation.",
    image: "/service-face.png",
    span: "md:col-span-1 md:row-span-1",
    href: "/services/face",
  },
  {
    title: "Luxury Nails",
    description: "Detailed manicures and structural gel enhancements.",
    image: "/service-nails.png",
    span: "md:col-span-1 md:row-span-1",
    href: "/services/nails",
  },
  {
    title: "Wellness & Spa",
    description: "Holistic body treatments and therapeutic massage.",
    image: "/service-wellness.png",
    span: "md:col-span-3 md:row-span-1",
    href: "/services/wellness",
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full bg-salon-bg scroll-mt-20">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-salon-text mb-6">
          Our Curated Services
        </h2>
        <p className="text-salon-charcoal max-w-2xl mx-auto leading-relaxed">
          Discover our comprehensive range of premium treatments designed to elevate your natural beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={index}
            // h-[280px] mobile ට - fill Image ට parent height ඕනෙමය, md+ grid auto-rows handle කරනවා
            className={`relative group overflow-hidden block h-[280px] md:h-auto ${service.span}`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              // Hero section ට below - lazy load කරනවා, sizes ගැන browser ට කිව්වා
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end h-full">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 drop-shadow-md">
                {service.title}
              </h3>
              <div className="overflow-hidden">
                <p className="text-salon-champagne text-sm opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out drop-shadow-sm">
                  {service.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}