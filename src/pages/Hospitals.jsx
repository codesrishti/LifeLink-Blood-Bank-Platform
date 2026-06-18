import { useState, useMemo } from 'react';

const HOSPITALS = [
  {
    id: 1,
    name: 'St. Mary Medical Center',
    location: '42 Health Blvd, North Sector',
    phone: '+1 (555) 012-3456',
    tag: 'Verified Bank',
    tagStyle: 'bg-green-100 text-green-800',
    type: 'local_hospital',
    typeStyle: 'bg-primary-fixed text-primary',
    availability: [
      { type: 'A+', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' },
      { type: 'O+', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' },
      { type: 'B-', status: 'Low', style: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
      { type: 'O-', status: 'Out', style: 'bg-red-50 border-red-200 text-red-700' }
    ]
  },
  {
    id: 2,
    name: 'Central Blood Bank',
    location: '12 Downtown Ave, Plaza District',
    phone: '+1 (555) 890-1122',
    tag: 'Public Hospital',
    tagStyle: 'bg-blue-100 text-blue-800',
    type: 'bloodtype',
    typeStyle: 'bg-tertiary-fixed text-tertiary',
    availability: [
      { type: 'A-', status: 'Out', style: 'bg-red-50 border-red-200 text-red-700' },
      { type: 'B+', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' },
      { type: 'O+', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' },
      { type: 'AB+', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' }
    ]
  },
  {
    id: 3,
    name: 'Unity Health Specialist',
    location: '788 Innovation Way, Tech Park',
    phone: '+1 (555) 456-7890',
    tag: 'Certified',
    tagStyle: 'bg-green-100 text-green-800',
    type: 'science',
    typeStyle: 'bg-secondary-container text-secondary',
    availability: [
      { type: 'A+', status: 'Low', style: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
      { type: 'O-', status: 'Low', style: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
      { type: 'AB-', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' },
      { type: 'B+', status: 'High', style: 'bg-green-50 border-green-200 text-green-700' }
    ]
  }
];

export default function Hospitals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlood, setSelectedBlood] = useState('All Blood Types');
  const [toastMessage, setToastMessage] = useState(null);

  const handleRequestDetails = (hospitalName) => {
    setToastMessage(`Details for ${hospitalName} sent to your registered email!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filteredHospitals = useMemo(() => {
    return HOSPITALS.filter(h => {
      const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            h.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesBlood = selectedBlood === 'All Blood Types' || 
                            h.availability.some(av => av.type === selectedBlood && av.status !== 'Out');
                            
      return matchesSearch && matchesBlood;
    });
  }, [searchQuery, selectedBlood]);

  return (
    <div>
      {/* Toast Alert */}
      {toastMessage && (
        <div class="fixed top-24 right-6 bg-[#00796B] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-bounce">
          <span class="material-symbols-outlined">check_circle</span>
          <span class="font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Hero & Map Section */}
      <section class="relative w-full bg-surface-container-low border-b border-outline-variant overflow-hidden h-[45vh] min-h-[350px] flex flex-col justify-end">
        <div class="absolute inset-0 z-0">
          <img 
            class="w-full h-full object-cover opacity-20 grayscale" 
            alt="Metropolitan Area Map Grid" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw3NdAUL5yWB1aNvAmICGHfagv49we9xGYu3ZThoJQUCvcSbzdiv5o0ZWj1u84bdFo0j4ZKzeB05J_l9MIAnPxs_irl4ocVPeLqjIDEP71KVDjauvmAYjvGWeOjKiZZva_Fz36TRmhKn0jtbODknlziKYizaixCg7eKHK6Vr5_IyhwbC-KM6mC0vLCO0qTYUcY-5n2VqdySOSEv6Mkc16oB4QKSZ7oq5wQ21nIax9OVnM8eaxDizxf3IN35zlvFS3TfcqsGK18P6Y"
          />
        </div>

        {/* Simulated Map Pin */}
        <div class="absolute top-[25%] left-[52%] flex flex-col items-center z-20">
          <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
            <span class="material-symbols-outlined text-white text-sm">local_hospital</span>
          </div>
          <div class="bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-outline-variant/30 mt-2 text-xs font-bold text-on-surface whitespace-nowrap">
            City General Hospital
          </div>
        </div>

        {/* Content Overlay */}
        <div class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full pb-8 self-center">
          <div class="bg-surface/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xl w-full md:w-auto inline-block">
            <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl text-on-surface mb-2 font-bold leading-tight">Partner Network</h1>
            <p class="text-body-md text-secondary mb-4 leading-relaxed">
              Real-time availability of blood units across our network of accredited hospitals and certified blood banks.
            </p>
            <div class="flex flex-wrap gap-4 items-center text-xs">
              <div class="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-outline-variant/30">
                <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span class="font-semibold text-on-surface">Available</span>
              </div>
              <div class="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-outline-variant/30">
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <span class="font-semibold text-on-surface">Low Stock</span>
              </div>
              <div class="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-outline-variant/30">
                <div class="w-2.5 h-2.5 rounded-full bg-error"></div>
                <span class="font-semibold text-on-surface">Out of Stock</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section class="py-12 bg-surface">
        <div class="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div class="flex flex-col md:flex-row gap-6 items-center bg-surface-container-low p-6 rounded-2xl border border-outline-variant/50 shadow-sm">
            <div class="flex-grow w-full relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">search</span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                class="w-full pl-12 pr-4 py-3 bg-white border border-outline rounded-xl focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none font-body-md" 
                placeholder="Search hospital name, city or blood bank..."
              />
            </div>
            <div class="w-full md:w-48">
              <select 
                value={selectedBlood}
                onChange={(e) => setSelectedBlood(e.target.value)}
                class="w-full py-3 px-4 bg-white border border-outline rounded-xl outline-none font-body-md px-4"
              >
                <option>All Blood Types</option>
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
        </div>
      </section>

      {/* Directory Listing */}
      <section class="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {filteredHospitals.length === 0 ? (
          <div class="bg-surface-container-lowest rounded-xl p-12 text-center border border-surface-container text-secondary">
            <span class="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
            <h3 class="font-headline-md text-xl mb-2 text-on-surface">No Partner Facilities Found</h3>
            <p>Try modifying your search query or selecting a different blood type filter.</p>
          </div>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} class="hospital-card bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-full">
                <div>
                  <div class="flex justify-between items-start mb-4">
                    <div class={`p-3 rounded-xl ${hospital.typeStyle}`}>
                      <span class="material-symbols-outlined">{hospital.type}</span>
                    </div>
                    <span class={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${hospital.tagStyle}`}>
                      {hospital.tag}
                    </span>
                  </div>
                  
                  <h3 class="font-headline-md text-headline-md text-on-surface mb-1 font-bold leading-snug">{hospital.name}</h3>
                  <p class="text-secondary text-sm flex items-center gap-2 mb-4">
                    <span class="material-symbols-outlined text-[16px]">location_on</span>
                    {hospital.location}
                  </p>

                  <div class="space-y-4">
                    <div class="flex justify-between items-center text-sm border-b border-outline-variant pb-2">
                      <span class="text-secondary font-medium">Contact:</span>
                      <span class="font-bold text-on-surface">{hospital.phone}</span>
                    </div>
                    <div>
                      <p class="text-xs text-secondary uppercase tracking-widest mb-3 font-semibold">Live Blood Availability</p>
                      <div class="grid grid-cols-4 gap-2">
                        {hospital.availability.map((av) => (
                          <div key={av.type} class={`border p-2 rounded-lg text-center ${av.style}`}>
                            <div class="font-bold text-sm">{av.type}</div>
                            <div class="text-[9px] uppercase font-bold tracking-wide">{av.status}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleRequestDetails(hospital.name)}
                  class="w-full mt-6 py-3 border-2 border-primary hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all cursor-pointer"
                >
                  Request Details
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Partner Registration Banner */}
      <section class="py-24 bg-inverse-surface text-inverse-on-surface overflow-hidden relative">
        <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span class="material-symbols-outlined text-[300px] absolute -right-20 -top-20">bloodtype</span>
        </div>
        <div class="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
          <div class="max-w-2xl">
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 font-bold text-white leading-tight">
              Want to register your facility as a LifeLink Partner?
            </h2>
            <p class="text-body-lg opacity-85 leading-relaxed">
              Join our growing network of hospitals and blood banks to help streamline the life-saving donation process and visibility.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button class="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Register Facility
            </button>
            <button class="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
