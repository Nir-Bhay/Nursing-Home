import React from 'react';
import { Calendar, Clock, User, Stethoscope, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickBooking = () => {
  const navigate = useNavigate();

  return (
    <section className="relative -mt-8 z-30 px-4">
      <div className="max-w-screen-2xl mx-auto bg-primary rounded-2xl shadow-elevated p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white min-w-[200px]">
            <h3 className="font-heading font-bold text-xl mb-1">Quick Appointment</h3>
            <p className="text-primary-soft text-sm">Book your slot in seconds</p>
          </div>

          <form className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <select className="w-full h-12 pl-10 pr-4 rounded-lg bg-white text-text-secondary border-none focus:ring-2 focus:ring-primary-light outline-none appearance-none">
                <option value="">Department</option>
                <option value="maternal">Maternal Care</option>
                <option value="prenatal">Prenatal Checkup</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
            </div>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <select className="w-full h-12 pl-10 pr-4 rounded-lg bg-white text-text-secondary border-none focus:ring-2 focus:ring-primary-light outline-none appearance-none">
                <option value="">Doctor</option>
                <option value="dr-meera">Dr. Meera Nibhay</option>
                <option value="dr-rohit">Dr. Rohit</option>
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input 
                type="date" 
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-white text-text-secondary border-none focus:ring-2 focus:ring-primary-light outline-none"
              />
            </div>

            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <select className="w-full h-12 pl-10 pr-4 rounded-lg bg-white text-text-secondary border-none focus:ring-2 focus:ring-primary-light outline-none appearance-none">
                <option value="">Time Slot</option>
                <option value="morning">Morning (9-12)</option>
                <option value="afternoon">Afternoon (12-4)</option>
                <option value="evening">Evening (4-8)</option>
              </select>
            </div>

            <button 
              type="button" 
              onClick={() => navigate('/book-appointment')}
              className="w-full h-12 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-semibold transition-all duration-300"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;
