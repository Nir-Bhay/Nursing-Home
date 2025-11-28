import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left Content */}
        <div className="bg-primary relative overflow-hidden flex items-center px-4 py-16 lg:p-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10" />
          <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Experience Our Care?
            </h2>
            <p className="text-white/90 text-lg mb-10 leading-relaxed">
              Book your appointment today and let us take care of you and your little one. We are here for you 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-2">Emergency Contact</p>
              <p className="text-3xl font-bold text-white font-heading">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[300px] lg:min-h-full">
                    <img
                      src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800"
                      alt="Clinic Reception"
                      className="absolute inset-0 w-full h-full object-cover"
                    />          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
