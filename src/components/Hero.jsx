import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star, Users, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-[72px] flex items-center overflow-hidden bg-gradient-to-br from-white to-primary-soft/30">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-soft/40 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-pink/60 blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-8 items-center py-8 lg:py-0">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft rounded-full text-primary text-sm font-semibold">
            <span className="animate-pulse">✨</span> Trusted Since 1995
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[1.1] text-secondary">
            Caring for Mothers, <br />
            <span className="text-primary">Nurturing New Lives</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-[540px] leading-relaxed">
            Specialized maternal care, safe deliveries, and 24/7 emergency services in a warm, professional environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-semibold shadow-card hover:shadow-elevated transition-all duration-300 group">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary-soft px-8 py-4 rounded-xl font-semibold transition-all duration-300 group">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-soft rounded-lg text-primary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-secondary text-lg">5000+</p>
                <p className="text-text-secondary text-sm">Safe Deliveries</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-soft rounded-lg text-primary">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-secondary text-lg">24/7</p>
                <p className="text-text-secondary text-sm">Emergency Care</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-soft rounded-lg text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-secondary text-lg">15+ Years</p>
                <p className="text-text-secondary text-sm">Trust</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="relative z-10 rounded-2xl border-[3px] border-primary-soft overflow-hidden shadow-float w-full max-h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
              alt="Doctor with patient" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-elevated z-20 flex items-center gap-3 max-w-[200px]"
          >
            <div className="bg-yellow-100 p-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <div>
              <p className="font-bold text-secondary">4.9 Rating</p>
              <p className="text-xs text-text-secondary">From 1000+ Reviews</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-4 md:-left-8 bg-white p-4 rounded-xl shadow-elevated z-20 flex items-center gap-3"
          >
            <div className="bg-primary-soft p-2 rounded-full">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-secondary">500+ Happy Families</p>
              <p className="text-xs text-text-secondary">This Year</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
