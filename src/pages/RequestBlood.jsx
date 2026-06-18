import { useState } from 'react';

const INITIAL_FEED = [
  {
    id: 1,
    name: 'Sarah Johnson',
    type: 'O-',
    hospital: 'General Hospital',
    timeAgo: '14 mins ago',
    urgency: 'critical',
    received: 1,
    needed: 4,
  },
  {
    id: 2,
    name: 'Michael Chen',
    type: 'B+',
    hospital: 'City Medical Center',
    timeAgo: '45 mins ago',
    urgency: 'urgent',
    received: 2,
    needed: 2,
  },
  {
    id: 3,
    name: 'Robert Wilson',
    type: 'A+',
    hospital: 'Eastside Health',
    timeAgo: '2 hours ago',
    urgency: 'normal',
    received: 0,
    needed: 1,
  }
];

export default function RequestBlood() {
  const [feed, setFeed] = useState(INITIAL_FEED);

  // Form states
  const [patientName, setPatientName] = useState('');
  const [bloodType, setBloodType] = useState('Select Blood Group');
  const [unitsNeeded, setUnitsNeeded] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle donation simulation
  const handleDonate = (id) => {
    setFeed(prevFeed =>
      prevFeed.map(item => {
        if (item.id === id && item.received < item.needed) {
          return { ...item, received: item.received + 1 };
        }
        return item;
      })
    );
  };

  // Submit Broadcast Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bloodType === 'Select Blood Group' || !patientName || !unitsNeeded) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Add new request to dynamic feed
      const newRequest = {
        id: Date.now(),
        name: patientName,
        type: bloodType,
        hospital: hospitalName || 'Local Hospital',
        timeAgo: 'Just now',
        urgency: urgency,
        received: 0,
        needed: parseInt(unitsNeeded, 10) || 1,
      };

      setFeed(prevFeed => [newRequest, ...prevFeed]);

      // Reset form fields
      setTimeout(() => {
        setSubmitSuccess(false);
        setPatientName('');
        setBloodType('Select Blood Group');
        setUnitsNeeded('');
        setUrgency('normal');
        setHospitalName('');
        setAddress('');
        setContactName('');
        setContactPhone('');
      }, 3000);

    }, 1500);
  };

  return (
    <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Left Column: Emergency Request Form */}
        <section class="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant shadow-sm">
          <div class="mb-8">
            <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-bold">Request Blood Emergency</h1>
            <p class="text-on-surface-variant font-body-md text-body-md">
              Fill out the details below carefully. Every second counts. Our network will be notified immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-label-md text-label-md text-on-surface">Patient Name</label>
                <input 
                  required
                  type="text" 
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none" 
                  placeholder="Full legal name"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-label-md text-label-md text-on-surface">Blood Group Required</label>
                <select 
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none"
                >
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-label-md text-label-md text-on-surface">Units Needed (Pints)</label>
                <input 
                  required
                  type="number" 
                  min="1"
                  value={unitsNeeded}
                  onChange={(e) => setUnitsNeeded(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none" 
                  placeholder="e.g. 2"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-label-md text-label-md text-on-surface">Urgency Level</label>
                <select 
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none"
                >
                  <option value="normal">Normal (Routine Procedure)</option>
                  <option value="urgent">Urgent (Within 24 Hours)</option>
                  <option value="critical">Critical (Immediate/Life Threatening)</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface">Hospital Name</label>
              <input 
                required
                type="text" 
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none" 
                placeholder="e.g. St. Jude Medical Center"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-label-md text-label-md text-on-surface">Location / Address</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
                <input 
                  required
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  class="w-full h-12 pl-10 pr-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none" 
                  placeholder="Full hospital address"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-label-md text-label-md text-on-surface">Contact Person Name</label>
                <input 
                  required
                  type="text" 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none" 
                  placeholder="Name of relative/friend"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-label-md text-label-md text-on-surface">Contact Number</label>
                <input 
                  required
                  type="tel" 
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-low font-body-md text-body-md form-input-focus outline-none" 
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div class="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting || submitSuccess}
                class={`w-full h-14 rounded-lg font-bold text-body-lg flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  submitSuccess 
                    ? 'bg-[#00796B] text-white' 
                    : 'bg-primary hover:opacity-90 active:scale-[0.98] text-on-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span class="material-symbols-outlined animate-spin">progress_activity</span>
                    <span>Broadcasting...</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <span class="material-symbols-outlined">check_circle</span>
                    <span>Request Broadcasted Successfully!</span>
                  </>
                ) : (
                  <>
                    <span class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                    <span>Broadcast Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Right Column: Info & Activity Sidebar */}
        <aside class="lg:col-span-5 space-y-gutter w-full">
          {/* Status Legend */}
          <div class="bg-surface-container-high rounded-xl p-6 border border-outline-variant">
            <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Urgency Status Legend</h2>
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-3 bg-error-container rounded-lg border border-error/20">
                <div class="w-4 h-4 rounded-full bg-error animate-pulse"></div>
                <div>
                  <p class="font-label-md text-label-md text-on-error-container">CRITICAL</p>
                  <p class="text-sm text-on-error-container/80 leading-relaxed">Life-threatening emergency. Immediate match needed.</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-3 bg-secondary-container rounded-lg border border-secondary/20">
                <div class="w-4 h-4 rounded-full bg-secondary"></div>
                <div>
                  <p class="font-label-md text-label-md text-on-secondary-container">URGENT</p>
                  <p class="text-sm text-on-secondary-container/80 leading-relaxed">Scheduled surgery or severe condition. Needed within 12-24h.</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-3 bg-tertiary-container/10 rounded-lg border border-tertiary/20">
                <div class="w-4 h-4 rounded-full bg-tertiary"></div>
                <div>
                  <p class="font-label-md text-label-md text-tertiary">NORMAL</p>
                  <p class="text-sm text-on-surface-variant/80 leading-relaxed">Routine requirement or recovery support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Feed Feed */}
          <div class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
            <div class="p-6 border-b border-outline-variant flex justify-between items-center bg-surface">
              <h2 class="font-headline-md text-headline-md text-on-surface">Live Feed</h2>
              <span class="flex items-center gap-2 text-error font-label-md text-label-md">
                <span class="w-2 h-2 rounded-full bg-error animate-ping"></span> Live Updates
              </span>
            </div>
            
            <div class="divide-y divide-outline-variant max-h-[600px] overflow-y-auto custom-scrollbar">
              {feed.map((item) => {
                const isGoalMet = item.received >= item.needed;
                const progressPercent = Math.min((item.received / item.needed) * 100, 100);
                
                return (
                  <div key={item.id} class="p-6 hover:bg-surface-container-low transition-all duration-300">
                    <div class="flex justify-between items-start mb-3">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg">
                          {item.type}
                        </div>
                        <div>
                          <p class="font-bold text-on-surface">{item.name}</p>
                          <p class="text-xs text-on-surface-variant">{item.hospital} • {item.timeAgo}</p>
                        </div>
                      </div>
                      <span class={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                        item.urgency === 'critical'
                          ? 'bg-error-container text-on-error-container'
                          : item.urgency === 'urgent'
                            ? 'bg-secondary-container text-on-secondary-container'
                            : 'bg-surface-container-high text-on-surface-variant'
                      }`}>
                        {item.urgency}
                      </span>
                    </div>

                    <div class="space-y-2">
                      <div class="flex justify-between text-xs font-label-md mb-1">
                        <span class="text-on-surface-variant">Units Received</span>
                        <span class="text-on-surface font-bold">{item.received} / {item.needed} Units</span>
                      </div>
                      
                      <div class="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div 
                          class={`h-full transition-all duration-500 ${isGoalMet ? 'bg-tertiary' : 'bg-primary'}`} 
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>

                      {isGoalMet ? (
                        <div class="flex items-center gap-2 mt-3 text-tertiary font-bold text-sm justify-center py-2 bg-tertiary/10 rounded-lg">
                          <span class="material-symbols-outlined text-sm">check_circle</span>
                          <span>Goal Met</span>
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleDonate(item.id)}
                          class="w-full mt-3 py-2 text-primary font-bold text-sm border border-primary/20 rounded hover:bg-primary/5 transition-colors cursor-pointer"
                        >
                          I Can Donate
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div class="p-4 bg-surface-container-low text-center border-t border-outline-variant">
              <span class="text-primary font-bold text-sm">Showing Active Requests</span>
            </div>
          </div>

          {/* Emergency Banner */}
          <div class="relative h-48 rounded-xl overflow-hidden group shadow-md">
            <img 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Clinical blood bank unit storage refrigerator" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0E-jVLDODZ1KFIVNJEJO9gGIN97vOnpQ2uvBCYrmKqPEmk3waPVSdhIS27HwGlvmGcJ_Tf3_x2AIh7wZUu0HpBG-65cCeEC-_zd_IxT0_SdRCrtao34Aqgl1fe6yRbNGxaVxQ8_OdMGw2dkj58VSDbdmvfeDFrD44355Ld2bAmt9cfu_sSeTUut1slE0OJBhQjjt1BNEkRbtpLhiabS2U-UKZ1sV8q9uJpTE9Aq35DXUfl3IRN24Kg1Tj6LYj3IhBSAD7GdSfzYQ"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex flex-col justify-end p-6">
              <p class="text-on-primary font-bold text-body-lg">Every drop counts.</p>
              <p class="text-on-primary/80 text-sm">Become a volunteer donor to receive emergency broadcast notifications.</p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
