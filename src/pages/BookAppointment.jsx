import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, User, Baby, Activity, Heart, Stethoscope, ChevronRight, Star, ArrowLeft, Clock, Phone, Mail, FileText, MapPin, Download, CheckCircle, MessageCircle } from 'lucide-react';

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPeriod, setSelectedPeriod] = useState('morning');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    patientName: '',
    mobile: '',
    email: '',
    age: '',
    gender: 'female',
    visitType: 'first',
    reason: '',
    specialRequests: '',
    consent: false
  });

  const departments = [
    { id: 'prenatal', name: 'Prenatal Care', icon: <Activity className="w-6 h-6" />, desc: 'Pregnancy Checkup' },
    { id: 'delivery', name: 'Delivery Consultation', icon: <Baby className="w-6 h-6" />, desc: 'Birth Planning' },
    { id: 'postnatal', name: 'Postnatal Care', icon: <Heart className="w-6 h-6" />, desc: 'After Delivery' },
    { id: 'pediatric', name: 'Pediatric', icon: <Baby className="w-6 h-6" />, desc: 'Newborn Care' },
    { id: 'general', name: 'General', icon: <Stethoscope className="w-6 h-6" />, desc: 'Health Check' },
  ];

  const doctors = [
    { id: 'dr-meera', name: 'Dr. Meera Nibhay', specialty: 'Senior Gynecologist', exp: '15+ years', rating: 4.9, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
    { id: 'dr-rajesh', name: 'Dr. Rajesh Kumar', specialty: 'Pediatrician', exp: '12+ years', rating: 4.8, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200' },
    { id: 'dr-anjali', name: 'Dr. Anjali Gupta', specialty: 'Obstetrician', exp: '10+ years', rating: 4.9, image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=200' },
  ];

  const timeSlots = {
    morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'],
    evening: ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM']
  };

  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const next7Days = getNext7Days();

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleBook = () => {
     setIsSubmitting(true);
     setTimeout(() => {
        setIsSubmitting(false);
        setIsBooked(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
     }, 2000);
  };

  // If booked, show confirmation screen
  if (isBooked) {
     return (
        <div className="pt-[72px] min-h-screen bg-surface pb-20 flex items-center justify-center px-4">
           <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-2xl w-full bg-white rounded-3xl shadow-elevated overflow-hidden"
           >
              <div className="bg-primary/10 p-8 text-center">
                 <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Check className="w-10 h-10 text-white" />
                 </div>
                 <h2 className="text-3xl font-heading font-bold text-secondary mb-2">Appointment Booked Successfully! 🎉</h2>
                 <p className="text-text-secondary">A confirmation has been sent to your mobile number</p>
              </div>

              <div className="p-8">
                 <div className="bg-surface rounded-2xl p-6 mb-8 border border-primary/10">
                    <div className="grid gap-4 md:grid-cols-2">
                       <div>
                          <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Patient Name</p>
                          <p className="text-lg font-bold text-secondary">{formData.patientName}</p>
                       </div>
                       <div>
                          <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Booking ID</p>
                          <p className="text-lg font-bold text-primary font-mono">#APT-2024-842</p>
                       </div>
                       <div>
                          <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Date & Time</p>
                          <p className="text-lg font-bold text-secondary">{formData.date && new Date(formData.date).toLocaleDateString()} at {formData.time}</p>
                       </div>
                       <div>
                          <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Doctor</p>
                          <p className="text-lg font-bold text-secondary">{doctors.find(d => d.id === formData.doctor)?.name}</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-sm text-text-secondary">
                       <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                       <p>Please arrive 15 minutes before your appointment time.</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-text-secondary">
                       <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                       <p>Bring previous medical records if any.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                       <Calendar className="w-5 h-5" /> Add to Calendar
                    </button>
                    <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                       <Download className="w-5 h-5" /> Download PDF
                    </button>
                 </div>
                 
                 <div className="mt-8 text-center">
                    <a href="/" className="text-secondary font-semibold hover:text-primary transition-colors">← Back to Home</a>
                 </div>
              </div>
           </motion.div>
        </div>
     );
  }

  return (
    <div className="pt-[72px] min-h-screen bg-surface pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-primary text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10" />
        <div className="max-w-screen-2xl mx-auto text-center relative z-10">
           <div className="text-sm font-medium mb-4 opacity-80">Home &gt; Book Appointment</div>
           <h1 className="text-4xl font-heading font-bold mb-3">Book Your Appointment</h1>
           <p className="text-lg opacity-90">Easy online booking in just 3 simple steps</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="sticky top-[72px] z-40 bg-white shadow-sm border-b border-gray-100 mb-8">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center max-w-2xl mx-auto">
            {[
              { step: 1, label: 'Service & Doctor', icon: <Stethoscope className="w-5 h-5" /> },
              { step: 2, label: 'Date & Time', icon: <Calendar className="w-5 h-5" /> },
              { step: 3, label: 'Your Details', icon: <User className="w-5 h-5" /> },
            ].map((item, index) => (
              <React.Fragment key={item.step}>
                <div className={`flex flex-col items-center relative z-10 ${currentStep >= item.step ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep > item.step ? 'bg-primary text-white' :
                    currentStep === item.step ? 'bg-white border-2 border-primary text-primary shadow-glow' :
                    'bg-white border-2 border-gray-200 text-gray-400'
                  }`}>
                    {currentStep > item.step ? <Check className="w-6 h-6" /> : item.icon}
                  </div>
                  <span className="text-xs md:text-sm font-semibold whitespace-nowrap">{item.label}</span>
                </div>
                {index < 2 && (
                  <div className={`flex-1 h-0.5 mx-2 md:mx-4 mb-6 transition-colors duration-300 ${currentStep > item.step ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 min-h-[500px]">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Service & Doctor */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-secondary flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                        Select Service & Doctor
                      </h2>
                      <p className="text-text-secondary ml-11">Choose the type of care you need</p>
                    </div>

                    {/* Department Selection */}
                    <div>
                      <label className="block text-sm font-bold text-secondary mb-4">Department / Service Type *</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {departments.map((dept) => (
                          <button
                            key={dept.id}
                            onClick={() => setFormData({ ...formData, department: dept.id })}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:border-primary/50 ${
                              formData.department === dept.id 
                              ? 'border-primary bg-primary-soft/30 ring-1 ring-primary' 
                              : 'border-gray-100 bg-white hover:bg-gray-50'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                               formData.department === dept.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                            }`}>
                              {dept.icon}
                            </div>
                            <p className={`font-bold ${formData.department === dept.id ? 'text-primary' : 'text-secondary'}`}>{dept.name}</p>
                            <p className="text-xs text-text-secondary mt-1">{dept.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Doctor Selection */}
                    <AnimatePresence>
                      {formData.department && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="overflow-hidden"
                        >
                          <label className="block text-sm font-bold text-secondary mb-4 mt-4">Select Doctor *</label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {doctors.map((doc) => (
                              <button
                                key={doc.id}
                                onClick={() => setFormData({ ...formData, doctor: doc.id })}
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                                  formData.doctor === doc.id 
                                  ? 'border-primary bg-primary-soft/30 ring-1 ring-primary' 
                                  : 'border-gray-100 bg-white hover:border-primary/30'
                                }`}
                              >
                                <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                                <div>
                                  <h3 className={`font-bold ${formData.doctor === doc.id ? 'text-primary' : 'text-secondary'}`}>{doc.name}</h3>
                                  <p className="text-xs text-primary font-medium">{doc.specialty}</p>
                                  <p className="text-xs text-text-secondary mt-1">{doc.exp} • <span className="text-yellow-500">★ {doc.rating}</span></p>
                                </div>
                              </button>
                            ))}
                          </div>
                          
                          <div className="mt-4 flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                id="any-doc" 
                                className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                                checked={formData.doctor === 'any'}
                                onChange={(e) => setFormData({ ...formData, doctor: e.target.checked ? 'any' : '' })}
                            />
                            <label htmlFor="any-doc" className="text-sm text-text-secondary cursor-pointer">I'm okay with any available doctor</label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action */}
                    <div className="pt-8 border-t flex justify-end">
                      <button 
                        onClick={handleNext}
                        disabled={!formData.department || !formData.doctor}
                        className="flex items-center gap-2 bg-primary disabled:bg-gray-300 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed"
                      >
                        Continue to Date & Time
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Date & Time */}
                {currentStep === 2 && (
                   <motion.div
                     key="step2"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="space-y-8"
                   >
                     <div>
                       <h2 className="text-2xl font-bold text-secondary flex items-center gap-3 mb-2">
                         <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                         Choose Date & Time
                       </h2>
                       <p className="text-text-secondary ml-11">Select when you'd like to visit</p>
                     </div>

                     {/* Date Selection */}
                     <div>
                        <label className="block text-sm font-bold text-secondary mb-4">Select Date *</label>
                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                           {next7Days.map((date, index) => {
                             const isSelected = formData.date === date.toDateString();
                             const isToday = index === 0;
                             return (
                               <button
                                 key={index}
                                 onClick={() => setFormData({ ...formData, date: date.toDateString() })}
                                 className={`flex-shrink-0 min-w-[100px] p-3 rounded-xl border-2 transition-all duration-300 ${
                                    isSelected 
                                    ? 'bg-primary border-primary text-white shadow-lg transform scale-105' 
                                    : isToday ? 'border-primary text-secondary bg-white' : 'border-gray-100 bg-white text-secondary hover:border-primary/50'
                                 }`}
                               >
                                 <p className={`text-xs font-medium mb-1 ${isSelected ? 'text-white/80' : 'text-primary'}`}>
                                   {isToday ? 'Today' : index === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short' })}
                                 </p>
                                 <p className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-secondary'}`}>
                                   {date.getDate()}
                                 </p>
                                 <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-text-secondary'}`}>
                                   {date.toLocaleDateString('en-US', { month: 'short' })}
                                 </p>
                               </button>
                             );
                           })}
                        </div>
                     </div>

                     {/* Time Selection */}
                     <AnimatePresence>
                        {formData.date && (
                           <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="overflow-hidden"
                           >
                              <label className="block text-sm font-bold text-secondary mb-4 mt-4">Available Time Slots *</label>
                              
                              {/* Period Tabs */}
                              <div className="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit mb-6">
                                 {['morning', 'afternoon', 'evening'].map((period) => (
                                    <button
                                       key={period}
                                       onClick={() => setSelectedPeriod(period)}
                                       className={`px-4 py-2 rounded-md text-sm font-semibold capitalize transition-all ${
                                          selectedPeriod === period 
                                          ? 'bg-white text-primary shadow-sm' 
                                          : 'text-text-secondary hover:text-secondary'
                                       }`}
                                    >
                                       {period}
                                    </button>
                                 ))}
                              </div>

                              {/* Slots Grid */}
                              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                 {timeSlots[selectedPeriod].map((slot) => (
                                    <button
                                       key={slot}
                                       onClick={() => setFormData({ ...formData, time: slot })}
                                       className={`py-3 px-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                                          formData.time === slot
                                          ? 'bg-primary border-primary text-white shadow-md'
                                          : 'bg-white border-gray-200 text-secondary hover:border-primary hover:text-primary'
                                       }`}
                                    >
                                       {slot}
                                    </button>
                                 ))}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>

                     {/* Navigation */}
                     <div className="pt-8 border-t flex justify-between items-center">
                        <button 
                           onClick={handleBack}
                           className="flex items-center gap-2 text-text-secondary font-semibold hover:text-primary transition-colors"
                        >
                           <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button 
                           onClick={handleNext}
                           disabled={!formData.date || !formData.time}
                           className="flex items-center gap-2 bg-primary disabled:bg-gray-300 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed"
                        >
                           Continue to Details
                           <ChevronRight className="w-5 h-5" />
                        </button>
                     </div>
                   </motion.div>
                )}

                {/* STEP 3: Patient Details */}
                {currentStep === 3 && (
                  <motion.div
                     key="step3"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="space-y-8"
                  >
                     <div>
                       <h2 className="text-2xl font-bold text-secondary flex items-center gap-3 mb-2">
                         <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                         Enter Your Details
                       </h2>
                       <p className="text-text-secondary ml-11">We'll use this to confirm your appointment</p>
                     </div>

                     <div className="space-y-6">
                        {/* Row 1: Name */}
                        <div>
                           <label className="block text-sm font-bold text-secondary mb-2">Patient Name *</label>
                           <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input 
                                 type="text"
                                 placeholder="Enter patient's full name"
                                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                 value={formData.patientName}
                                 onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                              />
                           </div>
                        </div>

                        {/* Row 2: Mobile */}
                        <div className="grid md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-bold text-secondary mb-2">Mobile Number *</label>
                              <div className="relative">
                                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input 
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                                 />
                              </div>
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-secondary mb-2">Email Address (Optional)</label>
                              <div className="relative">
                                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                 <input 
                                    type="email"
                                    placeholder="For appointment confirmation"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                 />
                              </div>
                           </div>
                        </div>

                        {/* Row 3: Age & Gender */}
                        <div className="grid grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-bold text-secondary mb-2">Age *</label>
                              <input 
                                 type="number"
                                 placeholder="Years"
                                 className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                 value={formData.age}
                                 onChange={(e) => setFormData({...formData, age: e.target.value})}
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-secondary mb-2">Gender *</label>
                              <div className="flex gap-2">
                                 {['Female', 'Male'].map((g) => (
                                    <button
                                       key={g}
                                       onClick={() => setFormData({...formData, gender: g.toLowerCase()})}
                                       className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${
                                          formData.gender === g.toLowerCase()
                                          ? 'bg-primary/10 border-primary text-primary'
                                          : 'bg-white border-gray-200 text-secondary hover:bg-gray-50'
                                       }`}
                                    >
                                       {g}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Visit Type */}
                        <div>
                           <label className="block text-sm font-bold text-secondary mb-2">Visit Type *</label>
                           <div className="flex gap-4">
                              {[
                                 { id: 'first', label: 'First Visit (New Patient)' },
                                 { id: 'followup', label: 'Follow-up Visit' }
                              ].map((type) => (
                                 <div key={type.id} className="flex items-center gap-2">
                                    <input 
                                       type="radio" 
                                       id={type.id} 
                                       name="visitType"
                                       className="w-5 h-5 text-primary focus:ring-primary"
                                       checked={formData.visitType === type.id}
                                       onChange={() => setFormData({...formData, visitType: type.id})}
                                    />
                                    <label htmlFor={type.id} className="text-secondary cursor-pointer">{type.label}</label>
                                 </div>
                              ))}
                           </div>
                        </div>
                        
                        {/* Reason */}
                        <div>
                           <label className="block text-sm font-bold text-secondary mb-2">Reason for Visit *</label>
                           <textarea 
                              placeholder="Briefly describe your concern or symptoms..."
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[100px]"
                              value={formData.reason}
                              onChange={(e) => setFormData({...formData, reason: e.target.value})}
                           />
                           <div className="flex flex-wrap gap-2 mt-2">
                              {['Regular Checkup', 'Pregnancy Test', 'Ultrasound', 'Vaccination'].map(chip => (
                                 <button 
                                    key={chip}
                                    onClick={() => setFormData({...formData, reason: chip})}
                                    className="text-xs bg-gray-100 text-text-secondary px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                                 >
                                    {chip}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Consent */}
                        <div className="flex items-start gap-3 pt-4 border-t">
                           <input 
                              type="checkbox" 
                              id="consent"
                              className="mt-1 w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
                              checked={formData.consent}
                              onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                           />
                           <label htmlFor="consent" className="text-sm text-text-secondary cursor-pointer">
                              I confirm that the information provided is accurate and I agree to the <span className="text-primary hover:underline">Terms & Conditions</span> and <span className="text-primary hover:underline">Privacy Policy</span>.
                           </label>
                        </div>
                     </div>

                     <div className="pt-8 border-t flex justify-between items-center">
                        <button 
                           onClick={handleBack}
                           className="flex items-center gap-2 text-text-secondary font-semibold hover:text-primary transition-colors"
                        >
                           <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button 
                           onClick={handleBook}
                           disabled={!formData.patientName || !formData.mobile || !formData.age || !formData.consent || isSubmitting}
                           className="flex items-center gap-2 bg-primary disabled:bg-gray-300 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-primary-light hover:shadow-lg disabled:cursor-not-allowed min-w-[200px] justify-center"
                        >
                           {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Booking...
                              </>
                           ) : (
                              <>
                                Confirm Appointment
                                <Check className="w-5 h-5" />
                              </>
                           )}
                        </button>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar / Summary */}
          <div className="hidden lg:block space-y-6">
             {/* Help Card */}
             <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="font-heading font-bold text-lg text-secondary mb-4">Need Help?</h3>
                <p className="text-text-secondary text-sm mb-4">Call our reception desk for immediate assistance.</p>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-primary font-bold text-lg mb-2">
                   <div className="p-2 bg-primary-soft rounded-full"><div className="w-4 h-4" /></div>
                   +91 98765 43210
                </a>
             </div>

             {/* Summary Preview */}
             <div className="bg-primary text-white rounded-2xl shadow-card p-6 sticky top-32">
                <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">Booking Summary</h3>
                <div className="space-y-4 text-sm">
                   <div className="flex justify-between">
                      <span className="opacity-80">Service:</span>
                      <span className="font-medium">{departments.find(d => d.id === formData.department)?.name || '-'}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="opacity-80">Doctor:</span>
                      <span className="font-medium">
                        {formData.doctor === 'any' ? 'Any Available' : doctors.find(d => d.id === formData.doctor)?.name || '-'}
                      </span>
                   </div>
                   <div className="flex justify-between">
                      <span className="opacity-80">Date:</span>
                      <span className="font-medium">{formData.date ? new Date(formData.date).toLocaleDateString() : '-'}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="opacity-80">Time:</span>
                      <span className="font-medium">{formData.time || '-'}</span>
                   </div>
                   {formData.patientName && (
                      <div className="flex justify-between pt-2 border-t border-white/20">
                         <span className="opacity-80">Patient:</span>
                         <span className="font-medium truncate max-w-[120px]">{formData.patientName}</span>
                      </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;