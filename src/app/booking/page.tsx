import Image from "next/image";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-salon-bg pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <p className="uppercase tracking-[0.3em] text-[10px] text-salon-mutedGold mb-4 font-medium">
            Reservations
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-salon-text tracking-tighter mb-6">
            Reserve Your <br className="hidden md:block" />
            <span className="italic font-light text-salon-charcoal/80">Session.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Info & Image */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div className="mb-12">
              <p className="text-sm text-salon-charcoal/80 leading-relaxed max-w-sm mb-8">
                Experience bespoke artistry tailored to your unique essence. Please provide your details, and our concierge will contact you to confirm your reservation.
              </p>
              
              <div className="space-y-6 text-sm text-salon-charcoal">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-salon-mutedGold mb-1 font-semibold">Location</p>
                  <p>7th Avenue, Luxury District, NY 10011</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-salon-mutedGold mb-1 font-semibold">Direct Line</p>
                  <p>+1 (555) 012-3456</p>
                </div>
              </div>
            </div>

            {/* Aesthetic Image */}
            <div className="relative w-full h-[400px] overflow-hidden rounded-sm grayscale-[20%]">
              <Image
                src="/booking-image.png"
                alt="Salon aesthetic"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full lg:w-7/12 bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-salon-mutedGold/10 rounded-sm shadow-sm">
            <form className="space-y-10">
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" id="firstName" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors peer placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-0 top-3 -translate-y-6 text-[10px] uppercase tracking-widest text-salon-charcoal/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:text-salon-mutedGold">First Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="lastName" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors peer placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-0 top-3 -translate-y-6 text-[10px] uppercase tracking-widest text-salon-charcoal/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:text-salon-mutedGold">Last Name</label>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="email" id="email" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors peer placeholder-transparent" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 top-3 -translate-y-6 text-[10px] uppercase tracking-widest text-salon-charcoal/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:text-salon-mutedGold">Email Address</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors peer placeholder-transparent" placeholder="Phone Number" />
                  <label htmlFor="phone" className="absolute left-0 top-3 -translate-y-6 text-[10px] uppercase tracking-widest text-salon-charcoal/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:text-salon-mutedGold">Phone Number</label>
                </div>
              </div>

              {/* Service Selection (Fixed defaultValue) */}
              <div className="relative">
                <select id="service" defaultValue="" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors appearance-none outline-none">
                  <option value="" disabled>Select a Service</option>
                  <option value="hair">Hair Artistry & Color</option>
                  <option value="esthetics">Advanced Esthetics</option>
                  <option value="nails">Luxury Nails</option>
                  <option value="spa">Wellness & Spa</option>
                  <option value="consultation">Initial Consultation</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-salon-charcoal">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              {/* Date & Time (Fixed defaultValue) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="date" id="date" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors outline-none" />
                  <label htmlFor="date" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-salon-charcoal/60">Preferred Date</label>
                </div>
                <div className="relative">
                  <select id="time" defaultValue="" className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors appearance-none outline-none">
                    <option value="" disabled>Preferred Time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-salon-charcoal">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea id="message" rows={3} className="block w-full border-0 border-b border-salon-charcoal/20 bg-transparent py-3 text-sm text-salon-text focus:border-salon-mutedGold focus:ring-0 transition-colors peer placeholder-transparent resize-none" placeholder="Special Requests or Notes"></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 -translate-y-6 text-[10px] uppercase tracking-widest text-salon-charcoal/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:text-salon-mutedGold">Special Requests or Notes</label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button type="button" className="w-full bg-salon-text text-salon-bg py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-salon-mutedGold transition-colors duration-500">
                  Request Reservation
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}