import { useState } from 'react';

const LOCATIONS = [
  { id: 1, name: 'Downtown Medical Center', distance: 0.8, type: 'Medical Center', icon: 'festival' },
  { id: 2, name: 'LifeLink Mobile Camp - City Hall', distance: 1.2, type: 'Mobile Camp', icon: 'airport_shuttle' },
  { id: 3, name: 'Metro Health Donation Hub', distance: 2.5, type: 'Donation Hub', icon: 'local_hospital' }
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM'
];

export default function Donate() {
  const [bloodType, setBloodType] = useState('');
  const [donationType, setDonationType] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('Oct 3, 2026');
  const [time, setTime] = useState('');
  
  // Search state for location
  const [searchLoc, setSearchLoc] = useState('');

  // Confirmation Success State
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const filteredLocations = searchLoc
    ? LOCATIONS.filter(l => l.name.toLowerCase().includes(searchLoc.toLowerCase()))
    : LOCATIONS;

  const handleConfirm = () => {
    if (!bloodType || !donationType || !location || !time) {
      alert('Please complete all 4 steps in the scheduler before confirming.');
      return;
    }
    
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      setShowSuccessModal(true);
    }, 1200);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    // Reset scheduler state
    setBloodType('');
    setDonationType('');
    setLocation('');
    setTime('');
    setSearchLoc('');
  };

  // Stepper calculations
  const getStepStatusClass = (stepNum) => {
    if (stepNum === 1 && bloodType) return 'bg-[#00796B] text-white';
    if (stepNum === 2 && donationType) return 'bg-[#00796B] text-white';
    if (stepNum === 3 && location) return 'bg-[#00796B] text-white';
    if (stepNum === 4 && time) return 'bg-[#00796B] text-white';
    
    // Active highlight
    if (stepNum === 1 && !bloodType) return 'bg-primary text-white';
    if (stepNum === 2 && bloodType && !donationType) return 'bg-primary text-white';
    if (stepNum === 3 && bloodType && donationType && !location) return 'bg-primary text-white';
    if (stepNum === 4 && bloodType && donationType && location && !time) return 'bg-primary text-white';

    return 'bg-surface-container-highest text-secondary';
  };

  return (
    <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Header Info */}
      <div class="relative rounded-3xl overflow-hidden mb-16 bg-primary-container min-h-[350px] flex items-center">
        <div class="absolute inset-0 z-0">
          <img 
            alt="Friendly medical professional" 
            class="w-full h-full object-cover opacity-30 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkKmTZ0InaqvHhurdDVn5U0RwDqL9OgIxZzbzGhnG5hNVp2L-g5RPqrIqzbINSucBBszILZpcFvQa18LU2UUuP8lXqT7gbOOvPWXZH3EfHYKqX0qSqAa1B8Xf9cXs6B2TvrIfeENSkEjVUrtR4eS5VmQ19iC32URmYL7U_ZvkdStAf3aMGb_7ZlYO-ssDfwhLo99aHX7NC3fSqjHigXhENdxL7tHjHuMA0uM9aShzeFNEQnbOPCM1Atc7jqV0Jhu_Fh9IINzjG0zs"
          />
        </div>
        <div class="relative z-10 p-8 md:p-16 max-w-2xl text-white">
          <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl text-white mb-4">Schedule Your Donation</h1>
          <p class="text-body-lg font-body-lg text-white/90 mb-8 leading-relaxed">
            Every donation can save up to three lives. Your contribution today ensures blood is available for patients in critical need tomorrow.
          </p>
          <div class="flex gap-4">
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span class="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span class="text-white font-label-sm text-label-sm">FDA Regulated</span>
            </div>
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span class="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              <span class="text-white font-label-sm text-label-sm">Takes only 45 mins</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form Steps */}
        <div class="lg:col-span-8 space-y-12">
          
          {/* Progress Stepper */}
          <div class="flex items-center justify-between px-4 mb-12">
            <div class="flex flex-col items-center gap-2">
              <div class={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${getStepStatusClass(1)}`}>1</div>
              <span class="text-label-sm font-label-sm text-secondary">Blood Type</span>
            </div>
            <div class="flex-1 h-1 bg-surface-container-highest mx-4 mb-6"></div>
            <div class="flex flex-col items-center gap-2">
              <div class={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${getStepStatusClass(2)}`}>2</div>
              <span class="text-label-sm font-label-sm text-secondary">Donation</span>
            </div>
            <div class="flex-1 h-1 bg-surface-container-highest mx-4 mb-6"></div>
            <div class="flex flex-col items-center gap-2">
              <div class={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${getStepStatusClass(3)}`}>3</div>
              <span class="text-label-sm font-label-sm text-secondary">Location</span>
            </div>
            <div class="flex-1 h-1 bg-surface-container-highest mx-4 mb-6"></div>
            <div class="flex flex-col items-center gap-2">
              <div class={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${getStepStatusClass(4)}`}>4</div>
              <span class="text-label-sm font-label-sm text-secondary">Time Slot</span>
            </div>
          </div>

          {/* Step 1: Blood Type Selection */}
          <section class="bg-white rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-6">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-3xl">water_drop</span>
              Step 1: Choose Blood Type
            </h2>
            <div class="grid grid-cols-3 md:grid-cols-5 gap-4">
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'I don\'t know'].map((type) => {
                const isSelected = bloodType === type;
                return (
                  <button 
                    key={type}
                    onClick={() => setBloodType(type)}
                    class={`py-3 px-4 rounded-xl border-2 font-bold text-center transition-all cursor-pointer ${
                      type === "I don't know" ? 'col-span-3 md:col-span-1' : ''
                    } ${
                      isSelected 
                        ? 'bg-primary text-white border-primary shadow-md' 
                        : 'border-outline-variant hover:border-primary text-on-surface hover:text-primary'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Step 2: Donation Type Selection */}
          <section class="bg-white rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-6">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
              Step 2: Select Donation Type
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Whole Blood', desc: 'Most common. One pint can save 3 lives.', time: '~45 mins', icon: 'opacity' },
                { name: 'Platelets', desc: 'Vital for cancer patients & surgeries.', time: '~2 hours', icon: 'vital_signs' },
                { name: 'Plasma', desc: 'Used for burn trauma & rare conditions.', time: '~1.5 hours', icon: 'science' }
              ].map((dt) => {
                const isSelected = donationType === dt.name;
                return (
                  <div 
                    key={dt.name}
                    onClick={() => setDonationType(dt.name)}
                    class={`cursor-pointer bg-surface rounded-2xl p-6 border-2 transition-all hover:scale-[1.02] shadow-sm flex flex-col justify-between ${
                      isSelected ? 'border-primary bg-primary-fixed/20' : 'border-transparent hover:border-primary'
                    }`}
                  >
                    <div>
                      <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <span class="material-symbols-outlined text-2xl">{dt.icon}</span>
                      </div>
                      <h3 class="font-headline-md text-headline-md text-primary mb-2 font-bold">{dt.name}</h3>
                      <p class="text-sm text-secondary mb-4 leading-relaxed">{dt.desc}</p>
                    </div>
                    <span class="text-primary font-bold text-sm block mt-4 bg-white/80 self-start px-3 py-1 rounded-full">{dt.time}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Step 3: Find Location */}
          <section class="bg-white rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-6">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-3xl">location_on</span>
              Step 3: Find a Location
            </h2>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="flex-grow relative">
                  <input 
                    type="text" 
                    value={searchLoc}
                    onChange={(e) => setSearchLoc(e.target.value)}
                    class="w-full h-14 pl-12 pr-4 rounded-xl border border-surface-variant focus:ring-primary focus:border-primary font-body-md text-body-md outline-none bg-surface-container-low" 
                    placeholder="Enter zip code or neighborhood"
                  />
                  <span class="material-symbols-outlined absolute left-4 top-4 text-outline">search</span>
                </div>
              </div>

              <div class="space-y-4">
                {filteredLocations.map((loc) => {
                  const isSelected = location === loc.name;
                  return (
                    <div 
                      key={loc.id}
                      onClick={() => setLocation(loc.name)}
                      class={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-primary-fixed/20 border-primary shadow-sm' 
                          : 'border-surface-variant hover:bg-primary/5 hover:border-primary'
                      }`}
                    >
                      <div class="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined text-2xl">{loc.icon}</span>
                      </div>
                      <div class="flex-grow">
                        <h4 class="font-bold text-on-surface">{loc.name}</h4>
                        <p class="text-sm text-secondary">{loc.distance} miles away • certified {loc.type}</p>
                      </div>
                      <span class="material-symbols-outlined text-outline">
                        {isSelected ? 'check_circle' : 'chevron_right'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Step 4: Pick Date & Time */}
          <section class="bg-white rounded-2xl p-6 border border-outline-variant/60 shadow-sm space-y-6">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-3xl">event_available</span>
              Step 4: Pick Time Slot
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Simplified Calendar View */}
              <div class="space-y-4 bg-surface p-4 rounded-xl border border-surface-variant/40">
                <div class="flex items-center justify-between font-bold text-label-md text-on-surface">
                  <span>October 2026</span>
                  <div class="flex gap-2">
                    <button class="p-1 rounded hover:bg-surface-container cursor-pointer"><span class="material-symbols-outlined">chevron_left</span></button>
                    <button class="p-1 rounded hover:bg-surface-container cursor-pointer"><span class="material-symbols-outlined">chevron_right</span></button>
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-label-sm text-secondary">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm font-semibold">
                  <div class="h-10 flex items-center justify-center opacity-20">28</div>
                  <div class="h-10 flex items-center justify-center opacity-20">29</div>
                  <div class="h-10 flex items-center justify-center text-secondary">1</div>
                  <div class="h-10 flex items-center justify-center text-secondary">2</div>
                  <div class="h-10 flex items-center justify-center bg-primary text-white font-bold rounded-lg cursor-pointer shadow">3</div>
                  <div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-fixed/20 cursor-pointer">4</div>
                  <div class="h-10 flex items-center justify-center rounded-lg hover:bg-primary-fixed/20 cursor-pointer">5</div>
                </div>
              </div>

              {/* Time Slots */}
              <div class="space-y-4">
                <h4 class="font-bold text-on-surface text-label-md">Available Slots (Oct 3, 2026)</h4>
                <div class="grid grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slotTime) => {
                    const isSelected = time === slotTime;
                    return (
                      <button 
                        key={slotTime}
                        onClick={() => setTime(slotTime)}
                        class={`py-3 px-4 rounded-xl border font-bold text-label-md transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-primary text-white border-primary shadow' 
                            : 'border-surface-variant hover:border-primary hover:text-primary text-on-surface'
                        }`}
                      >
                        {slotTime}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Action CTAs */}
          <div class="pt-8 flex flex-col md:flex-row gap-4">
            <button 
              onClick={handleConfirm}
              disabled={isConfirming || !bloodType || !donationType || !location || !time}
              class="flex-grow bg-primary text-white h-16 rounded-2xl font-headline-md text-headline-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
            >
              {isConfirming ? (
                <>
                  <span class="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                  <span>Processing Appointment...</span>
                </>
              ) : (
                'Confirm Appointment'
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Sidebar Summary & Checklist */}
        <aside class="lg:col-span-4 space-y-8 w-full">
          <div class="sticky top-28 space-y-6">
            
            {/* Dynamic Summary Card */}
            <div class="bg-primary-container/5 rounded-3xl p-8 border border-primary/10 shadow-sm">
              <h3 class="font-headline-md text-headline-md text-primary mb-6 font-bold">Donation Summary</h3>
              <ul class="space-y-4">
                <li class="flex justify-between items-center py-3 border-b border-surface-variant/30 text-sm">
                  <span class="text-secondary font-semibold">Blood Type</span>
                  <span class="font-bold text-primary">{bloodType || '—'}</span>
                </li>
                <li class="flex justify-between items-center py-3 border-b border-surface-variant/30 text-sm">
                  <span class="text-secondary font-semibold">Donation Type</span>
                  <span class="font-bold text-primary">{donationType || '—'}</span>
                </li>
                <li class="flex flex-col gap-1 py-3 border-b border-surface-variant/30 text-sm">
                  <span class="text-secondary font-semibold">Location</span>
                  <span class="font-bold text-primary text-right self-end max-w-[200px] truncate">{location || '—'}</span>
                </li>
                <li class="flex justify-between items-center py-3 text-sm">
                  <span class="text-secondary font-semibold">Date &amp; Time</span>
                  <span class="font-bold text-primary text-right">{time ? `${date} at ${time}` : '—'}</span>
                </li>
              </ul>
            </div>

            {/* Eligibility Quick Check */}
            <div class="bg-white rounded-3xl p-8 border border-outline-variant/60 shadow-sm">
              <h4 class="font-headline-md text-headline-md text-on-surface mb-6 font-bold">Eligibility Check</h4>
              <ul class="space-y-4">
                {[
                  'Age: Between 17 and 65 years old.',
                  'Weight: At least 110 lbs (50kg).',
                  'Last Donation: 8+ weeks ago.',
                  'Healthy: Feeling well on donation day.'
                ].map((item, index) => (
                  <li key={index} class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-tertiary-container mt-0.5">check_circle</span>
                    <p class="text-body-md font-body-md text-on-surface-variant">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Donate? Card */}
            <div class="relative overflow-hidden rounded-3xl bg-tertiary-container text-on-tertiary-container p-8 shadow-sm">
              <div class="relative z-10 text-white">
                <h4 class="font-headline-md text-headline-md mb-4 font-bold text-white">Why Donate?</h4>
                <div class="space-y-4 mb-6">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined">favorite</span>
                    <span class="text-body-md font-body-md font-semibold">Save up to 3 lives today</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined">health_metrics</span>
                    <span class="text-body-md font-body-md font-semibold">Free health checkup</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined">award_star</span>
                    <span class="text-body-md font-body-md font-semibold">Earn LifeLink reward points</span>
                  </div>
                </div>
                <img 
                  alt="Care team" 
                  class="w-full h-32 object-cover rounded-xl mt-4 border border-white/20" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbHan1WAuIqrcO7jijNSsUdQB2e0vIju3ILq-t5UKz52bL_k1nSoT6Ih7rExAgzs3Kzn4YmxytQT6Nj6SDudeQIlMPmvnytfoCT-PHKxlggRzxhTJXeQytFuOL-noQkAAAwMUD4xTp4tGgQGicFkFeBvM0Zw5hbuy7w95Ffgb4piFWFkVuO_2eGO8YBMXVbWIWovOTd2XICNVWM3gGRMEVJ6gbh-CXv9ewqUGqXUbuBXiAA_r5Fp2ZNi3LX4tzug50Vxs3y6sDMZw"
                />
              </div>
            </div>

          </div>
        </aside>
      </div>

      {/* Appointment Success Modal */}
      {showSuccessModal && (
        <div class="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-on-surface/40 backdrop-blur-sm">
          <div class="bg-surface-container-lowest w-full max-w-md rounded-[32px] overflow-hidden medical-soft-shadow p-8 text-center animate-in fade-in zoom-in duration-300 border border-surface-container">
            <div class="w-20 h-20 bg-[#00796B]/10 rounded-full flex items-center justify-center text-[#00796B] mx-auto mb-6">
              <span class="material-symbols-outlined text-5xl">check_circle</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 font-bold">Appointment Confirmed!</h2>
            
            <div class="bg-surface p-4 rounded-xl text-left border border-outline-variant/30 mb-6 space-y-2 text-sm text-on-surface-variant font-medium">
              <p><strong>Blood Type:</strong> {bloodType}</p>
              <p><strong>Donation Type:</strong> {donationType}</p>
              <p><strong>Location:</strong> {location}</p>
              <p><strong>Date &amp; Time:</strong> {date} at {time}</p>
            </div>
            
            <p class="text-secondary text-sm mb-6 leading-relaxed">
              We have sent a confirmation email with details and preparation guidelines. Please arrive 10 minutes early.
            </p>
            <button 
              onClick={handleCloseSuccess}
              class="w-full bg-[#00796B] text-white py-3.5 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
