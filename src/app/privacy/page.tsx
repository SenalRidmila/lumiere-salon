import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-salon-bg pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-salon-mutedGold hover:text-salon-text transition-colors mb-8 inline-block">
            ← Return to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-salon-text mb-4">Privacy Policy</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-salon-charcoal/50">Last Updated: March 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-sm md:text-base text-salon-charcoal/80 leading-relaxed font-light">
          
          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">1. Introduction</h2>
            <p>
              At Lumière, we are committed to protecting the privacy and security of our clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our luxury aesthetic services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when booking an appointment, participating in consultations, or contacting us. This includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, email address, and phone number.</li>
              <li>Treatment history and specific aesthetic preferences.</li>
              <li>Payment and billing information (processed securely via third-party providers).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">3. How We Use Your Information</h2>
            <p>
              The information we collect is used to provide a bespoke and personalized experience. This includes scheduling appointments, tailoring treatments to your unique profile, communicating regarding your bookings, and ensuring the highest standard of care and safety during your visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to help protect your personal information. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact our concierge team at: <br/>
              <span className="font-medium text-salon-text">concierge@lumiere.com</span> or call us at <span className="font-medium text-salon-text">+1 (555) 012-3456</span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}