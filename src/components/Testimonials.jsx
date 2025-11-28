import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The care I received at Dr. Nibhay Nursing Home was exceptional. The doctors were so supportive during my delivery, and the nurses took great care of my baby. It felt like home.",
      name: "Mrs. Priya Sharma",
      detail: "Mother of Baby Aryan",
      rating: 5,
      date: "Delivered March 2024",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      text: "Dr. Meera is an angel. Her guidance throughout my high-risk pregnancy gave me so much confidence. I am forever grateful to the entire team for their dedication.",
      name: "Mrs. Ananya Singh",
      detail: "Mother of Baby Ki",
      rating: 5,
      date: "Delivered Jan 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      text: "Clean facilities, professional staff, and very affordable. The emergency team was very quick to respond when we came in at midnight. Highly recommended.",
      name: "Mrs. Suman Verma",
      detail: "Mother of Baby Vihaan",
      rating: 5,
      date: "Delivered Dec 2023",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-accent-pink">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-2 text-4xl font-heading font-bold text-secondary">Stories from Happy Families</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-white rounded-full shadow-subtle text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-white rounded-full shadow-subtle text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-elevated p-8 md:p-12 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
            <Quote className="absolute bottom-8 right-8 w-12 h-12 text-primary/10 rotate-180" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-xl md:text-2xl text-secondary font-medium italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="w-12 h-1 bg-primary/30 mx-auto mb-8" />
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-primary p-1">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary">{testimonials[currentIndex].name}</h4>
                    <p className="text-text-secondary text-sm">{testimonials[currentIndex].detail}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-text-secondary mt-1">{testimonials[currentIndex].date}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
