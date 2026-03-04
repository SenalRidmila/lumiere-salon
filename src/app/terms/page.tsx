import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-salon-bg pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-salon-mutedGold hover:text-salon-text transition-colors mb-8 inline-block">
            ← Return to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-salon-text mb-4">Terms of Service</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-salon-charcoal/50">Effective Date: March 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-sm md:text-base text-salon-charcoal/80 leading-relaxed font-light">
          
          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website and utilizing the services provided by Lumière Aesthetics, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">2. Appointments & Cancellations</h2>
            <p>
              We highly value the time of our clients and our artisans. All reservations require a valid credit card to secure. We kindly ask for a minimum of 24 hours' notice for any cancellations or rescheduling. Failure to do so may result in a cancellation fee equivalent to 50% of the reserved service amount.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">3. Service Expectations & Results</h2>
            <p>
              Lumière is dedicated to providing exceptional care. However, aesthetic results can vary based on individual factors. Consultations are provided to set realistic expectations, and no absolute guarantees can be made regarding the final outcome of any treatment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">4. Intellectual Property</h2>
            <p>
              The content, design, imagery, and branding on this website are the exclusive property of Lumière Aesthetics. Unauthorized use, reproduction, or distribution of our materials is strictly prohibited and may violate copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-salon-text mb-4">5. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our services or pricing at any time without prior notice. We shall not be liable to you or to any third party for any modification or price change.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}