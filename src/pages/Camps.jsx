import { useState, useEffect } from 'react';

const CAMPS_DATA = [
  {
    id: 1,
    title: 'City Hospital Annual Drive',
    date: '24 June',
    tag: 'Urgent Need',
    tagStyle: 'bg-primary-fixed text-on-primary-fixed-variant',
    time: '09:00 AM - 04:00 PM',
    location: 'Main Wing, City General Hospital',
    locationCategory: 'Downtown',
    organizer: 'Medical Red Cross',
  },
  {
    id: 2,
    title: 'Tech Park Blood Camp',
    date: '28 June',
    tag: 'Community',
    tagStyle: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    time: '10:00 AM - 05:00 PM',
    location: 'Cyber Plaza Central Garden',
    locationCategory: 'North Side',
    organizer: 'LifeLink Partners',
  },
  {
    id: 3,
    title: 'University Donation Drive',
    date: '02 July',
    tag: 'Weekend Event',
    tagStyle: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    time: '08:00 AM - 02:00 PM',
    location: 'Student Union Hall A',
    locationCategory: 'University Campus',
    organizer: 'Student Health Board',
  }
];

export default function Camps() {
  const [filterLoc, setFilterLoc] = useState('All');
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bloodType, setBloodType] = useState("Don't know");
  const [slot, setSlot] = useState('Morning (09:00 - 12:00)');
  
  // Submit states
  const [isRegistering, setIsRegistering] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  // Filter logic
  const filteredCamps = filterLoc === 'All' || filterLoc === 'Filter by Location'
    ? CAMPS_DATA
    : CAMPS_DATA.filter(camp => camp.locationCategory === filterLoc);

  // Modal handlers
  const openModal = (camp) => {
    setSelectedCamp(camp);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCamp(null);
    setRegSuccess(false);
    setIsRegistering(false);
    document.body.style.overflow = 'auto';
  };

  // Keyboard escape mapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsRegistering(true);

    setTimeout(() => {
      setIsRegistering(false);
      setRegSuccess(true);
      setTimeout(() => {
        closeModal();
        // Clear fields
        setFullName('');
        setPhone('');
        setEmail('');
        setBloodType("Don't know");
        setSlot('Morning (09:00 - 12:00)');
      }, 2000);
    }, 1200);
  };

  return (
    <div>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-surface-container-lowest py-20 md:py-32">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="z-10">
            <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md mb-6">
              Community Driven
            </span>
            <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl text-on-surface mb-6 leading-tight">
              Join a Movement <span class="text-primary">Near You</span>
            </h1>
            <p class="text-body-lg font-body-lg text-secondary mb-10 max-w-lg leading-relaxed">
              Every drop counts. Participate in our community blood drives and help us ensure that life-saving blood is always available for those in need.
            </p>
            <div class="flex flex-wrap gap-4">
              <a 
                href="#upcoming-camps" 
                class="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md medical-soft-shadow hover:opacity-90 active:scale-95 transition-all text-center"
              >
                View Upcoming Camps
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-[48px] overflow-hidden medical-soft-shadow rotate-3 scale-95 relative z-10">
              <img 
                class="w-full h-full object-cover" 
                alt="Community volunteers at donation camp" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRroQveAnqPI1_uOBbWkWMEJNLLhlOKSmH_0N1t6mO0NxWLCx4S7YvjWXsNvpIzBfss9Mxv-iKbjnSVmqtrcyx0ortmLe9wOAEzl2y1dRBzjh8ExWjSCr_IDZZiKN4csETRCAc5ZPC7x3i1I-qs3AZM8tRTm8FEA12aFr4kdMrvdZwS3Dn0O82gXkgifbJk2NmYaB-QdGGZndQl9f2RebDWfLTlCNNbv--iF1C4C80tW_R7CepuMxlCDouL3V4kjzwemf_d5jjp-k"
              />
            </div>
            <div class="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-30 -z-0"></div>
            <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary-fixed rounded-full blur-3xl opacity-30 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Camps Section */}
      <section class="py-24 bg-surface" id="upcoming-camps">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Upcoming Camps</h2>
              <p class="text-body-md font-body-md text-secondary">Find a donation event happening in your city this month.</p>
            </div>
            <div class="flex gap-4">
              <select 
                value={filterLoc}
                onChange={(e) => setFilterLoc(e.target.value)}
                class="rounded-xl border border-surface-variant p-3 font-body-md bg-white medical-soft-shadow focus:ring-primary focus:border-primary outline-none"
              >
                <option value="All">Filter by Location</option>
                <option value="Downtown">Downtown</option>
                <option value="North Side">North Side</option>
                <option value="University Campus">University Campus</option>
              </select>
            </div>
          </div>

          {filteredCamps.length === 0 ? (
            <div class="bg-surface-container-lowest p-12 text-center rounded-2xl border border-outline-variant text-secondary">
              <span class="material-symbols-outlined text-5xl mb-4 text-outline">location_off</span>
              <h3 class="font-headline-md text-lg text-on-surface">No Events Scheduled</h3>
              <p>There are no drives scheduled for this filter selection at this time.</p>
            </div>
          ) : (
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCamps.map((camp) => (
                <div key={camp.id} class="bg-surface-container-lowest rounded-2xl p-6 medical-soft-shadow card-hover-lift border border-outline-variant flex flex-col h-full justify-between">
                  <div>
                    <div class="flex justify-between items-start mb-4">
                      <div class={`px-3 py-1 rounded-lg font-label-md text-label-md ${camp.tagStyle}`}>
                        {camp.tag}
                      </div>
                      <span class="text-primary font-bold">{camp.date}</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-4 font-bold">{camp.title}</h3>
                    
                    <div class="space-y-3 mb-8">
                      <div class="flex items-center gap-3 text-secondary">
                        <span class="material-symbols-outlined text-primary text-xl">schedule</span>
                        <span class="font-body-md text-body-md">{camp.time}</span>
                      </div>
                      <div class="flex items-center gap-3 text-secondary">
                        <span class="material-symbols-outlined text-primary text-xl">location_on</span>
                        <span class="font-body-md text-body-md">{camp.location}</span>
                      </div>
                      <div class="flex items-center gap-3 text-secondary">
                        <span class="material-symbols-outlined text-primary text-xl">person</span>
                        <span class="font-body-md text-body-md">Org: {camp.organizer}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => openModal(camp)}
                    class="w-full bg-primary text-white py-3 rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-98 transition-all cursor-pointer shadow-sm"
                  >
                    Register to Donate
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section class="py-24 bg-surface-container-low">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div class="text-center mb-16">
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Our Shared Impact</h2>
            <p class="text-body-md font-body-md text-secondary max-w-2xl mx-auto leading-relaxed">
              Relive the moments of courage and compassion from our previous donation events. Every smile represents a life potentially saved.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div class="col-span-2 row-span-2 overflow-hidden rounded-3xl medical-soft-shadow h-80 sm:h-96 md:h-auto">
              <img 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                alt="Smiling donor at community blood camp" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXQE7X2s_dwTPZmZQPkqd5dV4cVy3SDIWBE79xOWcXN-9jU1alhcQjDBg2_a3zVoiE2oc7EGMgk9upV6_-5GoLle_MbgwkClJbMKRGn5mBvewnns-O_ePIwWedjIUXY_BY89CBH_qbivIH0XsFMcNjQ7tPR0sZ-bbJDDJY09bQwLJ_xQd7L_qthjylNs68_hvI-xQuppigrgIatwiE3Vm-fLCg_RTvKLAMbkZDbkfNWqzhAiN1CwhM9s1M9COmxm27O9hZS6SzWB8"
              />
            </div>
            <div class="overflow-hidden rounded-3xl medical-soft-shadow h-48 md:h-64">
              <img 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                alt="Medical staff packaging blood bag" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT6yk3wqXxMMdp9cuE6EF0XveJQcs-PCnomQVWXE1DNbFRxYzOstFkvujUaXAqA_jMqGiz1hxZUNCxx3zpXKvCy-VZbARrwcIYM4t-bRZt-E8dHQYDwDnj4BckZpH877aLzNpaP8uBMCgadffG--ZsSCuNLxdL1eJAsi63N7HCjOVNgc6bUjEwuYD5PEh9c4MTUCmA3tZHkosNp0rMRZhJTXLoAWDt9n9dHXreXiRTjvjR95gk7mdmnjs66van6M_6XngTI6ItQ_c"
              />
            </div>
            <div class="overflow-hidden rounded-3xl medical-soft-shadow h-48 md:h-64">
              <img 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                alt="People waiting in donation camp" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOyAijXY7CJoM5RDq251L0_PGeZ6VX4IHh30BcmWlH_ks0HVBtNz2agjnZduGMlzzaWr8sklRzYY6M2vhDVIKbuO86fmqA4SEUvJrT1FcHNPv3DLfhL4qSfRBzBpKBriZvJVqRPURnl3cfh_BYiGaM9anatH_8d2mJ19Tw8wrLKCpmVBNKhzg6fzUpzV2A0CckUCmdxu7CJKMJNGCVB2Cg2ASv_ClscOShR71rsfy6qpKkV__gx7yboe0JUfTXQkukwtVv0Aks4LM"
              />
            </div>
            <div class="col-span-2 overflow-hidden rounded-3xl medical-soft-shadow h-48 md:h-64">
              <img 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                alt="Medical volunteers group photo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATcNtpq7KPrV0muANWrFuMjJ5PL9MXhp5laysaxjInxtr13Fx8Zm1d07I8UPKBiA2ffZTRd2dEjAB1PFsiFHt6szs0HDdmf2IsB_5MIJuSofjhs_sGggiziwmvXXW0F2p14RbsqloFcTBUoG3yPui7AOIHp9SjZz3dvV6OU0AT9aPLbQ2m5IUlGJvQHGluJograqbGNkeY6yvADg4RybCvi4oULj8sfXMfJ70IaGLvFEFBgsA4z03tRzVoE1RrDid7Rqs6HeVwWkk"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && selectedCamp && (
        <div 
          id="regModal"
          onClick={(e) => { if(e.target.id === 'regModal') closeModal(); }}
          class="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-on-surface/40 backdrop-blur-sm transition-opacity"
        >
          <div class="bg-surface-container-lowest w-full max-w-xl rounded-[32px] overflow-hidden medical-soft-shadow animate-in fade-in zoom-in duration-300">
            <div class="bg-primary p-8 text-on-primary">
              <div class="flex justify-between items-center mb-4">
                <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white">Register for Camp</h2>
                <button 
                  class="material-symbols-outlined text-white hover:bg-white/10 rounded-full p-2 transition-all cursor-pointer"
                  onClick={closeModal}
                >
                  close
                </button>
              </div>
              <p class="font-body-lg text-body-lg opacity-90">
                Selected Event: <span class="font-bold">{selectedCamp.title}</span>
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} class="p-8 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface-variant block">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    class="w-full h-12 rounded-xl border border-outline-variant focus:ring-primary focus:border-primary px-4 outline-none bg-surface-container-low" 
                    placeholder="John Doe"
                  />
                </div>
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface-variant block">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="w-full h-12 rounded-xl border border-outline-variant focus:ring-primary focus:border-primary px-4 outline-none bg-surface-container-low" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="font-label-md text-label-md text-on-surface-variant block">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full h-12 rounded-xl border border-outline-variant focus:ring-primary focus:border-primary px-4 outline-none bg-surface-container-low" 
                  placeholder="john@example.com"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface-variant block">Blood Type (Optional)</label>
                  <select 
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    class="w-full h-12 rounded-xl border border-outline-variant focus:ring-primary focus:border-primary px-4 outline-none bg-surface-container-low"
                  >
                    <option>Don't know</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface-variant block">Preferred Slot</label>
                  <select 
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    class="w-full h-12 rounded-xl border border-outline-variant focus:ring-primary focus:border-primary px-4 outline-none bg-surface-container-low"
                  >
                    <option>Morning (09:00 - 12:00)</option>
                    <option>Afternoon (12:00 - 04:00)</option>
                  </select>
                </div>
              </div>

              <div class="flex items-start gap-3 pt-2">
                <input required class="mt-1 rounded text-primary focus:ring-primary cursor-pointer" id="consent" type="checkbox" />
                <label class="text-sm text-secondary cursor-pointer select-none" for="consent">
                  I confirm that I have read the donor eligibility criteria and am fit to donate on the selected date.
                </label>
              </div>

              <button 
                type="submit"
                disabled={isRegistering || regSuccess}
                class={`w-full h-14 rounded-xl font-headline-md text-headline-md medical-soft-shadow transition-all mt-4 cursor-pointer text-white font-bold flex items-center justify-center gap-2 ${
                  regSuccess ? 'bg-[#00796B]' : 'bg-primary hover:opacity-90'
                }`}
              >
                {isRegistering ? (
                  <>
                    <span class="material-symbols-outlined animate-spin">progress_activity</span>
                    <span>Registering...</span>
                  </>
                ) : regSuccess ? (
                  <>
                    <span class="material-symbols-outlined">check_circle</span>
                    <span>Registration Successful!</span>
                  </>
                ) : (
                  'Confirm Registration'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
