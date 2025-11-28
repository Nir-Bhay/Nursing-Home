import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Meera Pandey",
      specialty: "Senior Gynecologist",
      exp: "15+ Years Experience",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Pediatrician",
      exp: "12+ Years Experience",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Anjali Gupta",
      specialty: "Obstetrician",
      exp: "10+ Years Experience",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Surgeon",
      exp: "14+ Years Experience",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Our Experts</span>
            <h2 className="mt-2 text-4xl font-heading font-bold text-secondary">Meet Our Caring Doctors</h2>
          </div>
          <button className="text-primary font-semibold hover:text-primary-light flex items-center gap-2 transition-colors">
            View All Doctors <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-1">{doc.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{doc.specialty}</p>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-text-secondary text-xs">{doc.exp}</p>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" /> {doc.rating}
                  </div>
                </div>
                <button className="w-full py-2 border border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
