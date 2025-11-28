import React from 'react';
import { Baby, Syringe, Activity, Heart, Ambulance, Stethoscope, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Normal Delivery",
      desc: "Safe and natural birthing experience with expert care and support throughout labor.",
      icon: <Baby className="w-7 h-7 text-primary" />,
    },
    {
      title: "Cesarean Delivery",
      desc: "Advanced surgical delivery with experienced surgeons and modern operation theatre.",
      icon: <Syringe className="w-7 h-7 text-primary" />,
    },
    {
      title: "Prenatal Care",
      desc: "Complete pregnancy monitoring with regular checkups, ultrasounds, and health guidance.",
      icon: <Activity className="w-7 h-7 text-primary" />,
    },
    {
      title: "Postnatal Care",
      desc: "Recovery support for mothers and comprehensive newborn care after delivery.",
      icon: <Heart className="w-7 h-7 text-primary" />,
    },
    {
      title: "24/7 Emergency",
      desc: "Round-the-clock emergency response for critical maternal and infant situations.",
      icon: <Ambulance className="w-7 h-7 text-emergency" />,
      isEmergency: true,
    },
    {
      title: "Newborn Care",
      desc: "Specialized neonatal care, vaccinations, and health monitoring for your little one.",
      icon: <Stethoscope className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Our Services</span>
          <h2 className="mt-2 text-4xl font-heading font-bold text-secondary">Specialized Care for Every Stage</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-text-secondary text-lg">Comprehensive maternal and newborn care services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-l-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated ${
                service.isEmergency ? 'hover:border-l-emergency' : 'hover:border-l-primary'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                service.isEmergency ? 'bg-emergency/10 group-hover:bg-emergency' : 'bg-primary-soft group-hover:bg-primary'
              }`}>
                {React.cloneElement(service.icon, { 
                  className: `w-7 h-7 transition-colors duration-300 ${
                    service.isEmergency ? 'text-emergency group-hover:text-white' : 'text-primary group-hover:text-white'
                  }` 
                })}
              </div>
              
              <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
              <p className="text-text-secondary mb-4 line-clamp-3">{service.desc}</p>
              
              <a href="#" className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                service.isEmergency ? 'text-emergency' : 'text-primary'
              }`}>
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
