import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "Experienced team of gynecologists and pediatricians",
    "State-of-the-art labor and delivery rooms",
    "Round-the-clock emergency response team",
    "Personalized care plan for every mother"
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Safe Deliveries" },
    { number: "50+", label: "Medical Staff" },
    { number: "4.9", label: "Patient Rating" },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Clinic Interior" 
              className="w-full h-full object-cover min-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-float max-w-[200px] hidden md:block">
            <p className="font-bold text-secondary text-lg">15+ Years</p>
            <p className="text-text-secondary text-sm">of Excellence in Maternal Care</p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
            A Legacy of Trust & <br />Compassionate Care
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            For over 15 years, families have trusted us with their most precious moments. We combine medical expertise with a warm, family-like atmosphere.
          </p>

          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-secondary font-medium group-hover:text-primary transition-colors">{feature}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-3xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
