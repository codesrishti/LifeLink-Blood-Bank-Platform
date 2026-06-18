import { useState, useMemo } from 'react';

const INITIAL_DONORS = [
  {
    id: 1,
    name: 'Marcus Sterling',
    type: 'O+',
    location: 'Brooklyn, NY',
    distance: 1.2,
    status: 'Available',
    lastDonated: '4 months ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2GcjLqzWgz6Erpv9ns9fccDPMJHSXrXYbwOIB0YsWPC88VRbotrIPcCTyY-vM2HT_sjuQW4QaowMSBYrENJrLKLY5Mnu5f2OExaU-ZWff2s2A9Ag9fvACQo1Nwyxj2i99JSRL-1TvIu6ClB7OrV4-NOY9zJSClAmmPk1cw8hbQ9hgcv-earD1f0zm0okLPB3_McWoM3xei61GPzKxvpbxPxrscWZfS3AE5p3mGFhn8Mr2ZJ-Tb0TTf9weL8ps3qHtQ_wVzzLrA1E',
    x: '20%',
    y: '30%',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    type: 'B-',
    location: 'Manhattan, NY',
    distance: 3.5,
    status: 'Busy',
    lastDonated: '2 weeks ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqdGoqPMA4sSQ5SHKcahzZ9jXS5rTpovF_AtDyg4lgs1YuvPcMSyXp56hfhdnL9tBYnqH4PGAkwWFopQferKQXA-dlb6MIICCSZJsZQhTK3sT9AGBzncLz0RoQqV0o1hl7XIN2DP9og7y8jijHEHAD8N9iPHdQ76gAjnLMo2tEwblUEuIlCe6w692JVT0Oil44lY5GwFhqq01loXg8ZGhToaz9bLcE2bVWPhqE8snKFrWOcHhQVhQfOuE-ZUJfyXRyDP0-g1q9gm0',
    x: '50%',
    y: '45%',
  },
  {
    id: 3,
    name: 'David Chen',
    type: 'AB+',
    location: 'Queens, NY',
    distance: 5.8,
    status: 'Available',
    lastDonated: '6 months ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS5EkjGBgcIbvu06Fe_7AFsSZkD8xYfPoBOGpS7mhwNc_s62H4-cF0bt78YLEEKwmMNYMJZ59VDuMAtdFAPapfzyCalueB2ti6DJzJ4xBuGplqBhVYJg9ceJQcUTg8GSOh8UHUFWMUWhl65idowasvl1I651u8YBIQDH_gzRVvZLYkH-NCcL2w6AhBIVmQb-AMkC6m4FrH3Ps5eEehpQZH0RPZ_y3AmmVpmWcbqxKRiCo9RLUNrpK-w6BY9SJGbdwOZVEQIK6nKPA',
    x: '70%',
    y: '40%',
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    type: 'A-',
    location: 'Bronx, NY',
    distance: 7.1,
    status: 'Available',
    lastDonated: '1 year ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiPPmHhaiYUDc_EbwTpjT04e7lKtJjFp4zrYyjqiOJdITlOaRuFQhl-uPm1BWf2iJc33WH3kxOycfrYn_QSSfuzHfjEg78bW1VGsR3lbRHJMLsQkKUSVr44XnhoAajRLInZuJFRp5z0mWK_5EylmQJ0_KDkJeS0zVukD5tBJgOtithf0dd6ao-G99q8m8JCMCMdL5DJ4WvncdJhKk34TMrTT8VnpZI3whLJQCjmMFaLGck1QYew3iQOu__17tQjPP60-WeFVP-3MY',
    x: '40%',
    y: '70%',
  },
  {
    id: 5,
    name: 'James Wilson',
    type: 'O-',
    location: 'Brooklyn, NY',
    distance: 2.8,
    status: 'Available',
    lastDonated: '5 months ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZZRz8eDFl_fmmllVs15-iAWrI4GpHldD7pnL9voDGLBjYo8aCihm0n4ygmxR0o9sI_lCBxfabDRUmVz9_zRBt1_NRRgcDPdqLHnsHt5gSprB__fAVBl03FU7qyBRVEo31D2qV3GcxjNmZJUZI8_nHs361K_dyOmMAeBAU3wxNb4cLSFWtCn79XVZIr1Pl3Mw756nP51qFRs-qxV11ZU-MvWUufRXOrAHCGkB7MZ6OExCqhKjsCsfdfxLfmUzVwnBr-PI4YyZ_cQ',
    x: '25%',
    y: '50%',
  },
  {
    id: 6,
    name: 'Sophia Patel',
    type: 'A+',
    location: 'Staten Island, NY',
    distance: 14.5,
    status: 'Available',
    lastDonated: '3 months ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCyp-L8zw69rkubYfvH5IalTCPkTzpxLWrpNReQGeXBBBL10NVFIZXWqGoXzouaKhWS-g9z23NxJQsy_YPXvdxJIyjoc2Y10KaFG9VRhzrml_PblQELBlWkuKxhMUMXLRQFQ-RlwhJL_TQPxAJsOSp_Xexh0k0oqlVBt0wcEucARNHzQkTwa_Xs9F2izuJguBsVrg7WlBZSscWI3x_J5c8sc_Ez-scgJ7ZrOtA_4Qu2LEmdnbNMZFXIka2lXE654jxLauWQttCb9I',
    x: '15%',
    y: '80%',
  }
];

export default function FindDonors() {
  const [bloodGroup, setBloodGroup] = useState('All Types');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('Anytime');
  const [radius, setRadius] = useState(15);
  const [sortBy, setSortBy] = useState('Closest First');
  const [hoveredDonorId, setHoveredDonorId] = useState(null);
  
  // Notification Toast state
  const [toastMessage, setToastMessage] = useState(null);

  // Filters Reset
  const handleReset = () => {
    setBloodGroup('All Types');
    setLocation('');
    setAvailability('Anytime');
    setRadius(15);
    setSortBy('Closest First');
  };

  const handleRequest = (donorName) => {
    setToastMessage(`Request successfully sent to ${donorName}!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Filter and Sort Logic
  const filteredDonors = useMemo(() => {
    return INITIAL_DONORS.filter((donor) => {
      // Blood Group Filter
      if (bloodGroup !== 'All Types' && donor.type !== bloodGroup) {
        return false;
      }
      // Location Filter (Search term)
      if (
        location &&
        !donor.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }
      // Radius Filter
      if (donor.distance > radius) {
        return false;
      }
      // Availability Filter
      if (availability === 'Available Now' && donor.status !== 'Available') {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'Closest First') {
        return a.distance - b.distance;
      }
      if (sortBy === 'Last Donated') {
        // Simple mock sorting: put shorter donated history first
        return a.lastDonated.localeCompare(b.lastDonated);
      }
      if (sortBy === 'Availability') {
        return a.status === 'Available' ? -1 : 1;
      }
      return 0;
    });
  }, [bloodGroup, location, availability, radius, sortBy]);

  return (
    <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 space-y-gutter">
      {/* Toast Alert */}
      {toastMessage && (
        <div class="fixed top-24 right-6 bg-[#00796B] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-bounce">
          <span class="material-symbols-outlined">check_circle</span>
          <span class="font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Search & Filter Section */}
      <section class="bg-surface-container-lowest rounded-xl p-6 md:p-8 medical-soft-shadow border border-surface-container">
        <div class="mb-8">
          <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-bold">Find Blood Donors Near You</h1>
          <p class="text-secondary font-body-md">Search across our verified community of life-savers. Every donor counts.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blood Group */}
          <div class="space-y-2">
            <label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">bloodtype</span>
              Blood Group
            </label>
            <select 
              value={bloodGroup} 
              onChange={(e) => setBloodGroup(e.target.value)}
              class="w-full h-12 rounded-lg border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary bg-surface-container-low transition-all px-4"
            >
              <option>All Types</option>
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

          {/* Location */}
          <div class="space-y-2">
            <label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
              <span class="material-symbols-outlined text-tertiary">location_on</span>
              Location
            </label>
            <div class="relative">
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                class="w-full h-12 rounded-lg border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary bg-surface-container-low transition-all pl-4 pr-10" 
                placeholder="City or Zip Code"
              />
              <span class="material-symbols-outlined absolute right-3 top-3 text-secondary">my_location</span>
            </div>
          </div>

          {/* Availability */}
          <div class="space-y-2">
            <label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary">event_available</span>
              Availability
            </label>
            <select 
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              class="w-full h-12 rounded-lg border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary bg-surface-container-low transition-all px-4"
            >
              <option>Anytime</option>
              <option>Available Now</option>
              <option>Weekend Only</option>
            </select>
          </div>

          {/* Distance Radius */}
          <div class="space-y-2">
            <label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary">distance</span>
              Radius (km)
            </label>
            <div class="flex items-center gap-4 pt-2">
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={radius}
                onChange={(e) => setRadius(parseInt(e.target.value, 10))}
                class="flex-grow accent-primary cursor-pointer"
              />
              <span class="font-label-md text-label-md w-12 text-right">{radius}km</span>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-end gap-4">
          <button 
            onClick={handleReset}
            class="px-6 py-2.5 rounded-lg border border-outline text-secondary font-label-md hover:bg-surface-variant transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span class="material-symbols-outlined">filter_list</span>
            Reset Filters
          </button>
        </div>
      </section>

      {/* Main Content Area: Map and Results */}
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Results Listing */}
        <div class="lg:col-span-8 space-y-6 order-2 lg:order-1">
          <div class="flex items-center justify-between">
            <h2 class="font-headline-md text-headline-md text-on-surface">
              {filteredDonors.length} {filteredDonors.length === 1 ? 'Donor' : 'Donors'} Found
            </h2>
            <div class="flex items-center gap-2 text-secondary font-label-md">
              Sort by: 
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                class="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-on-surface outline-none"
              >
                <option>Closest First</option>
                <option>Last Donated</option>
                <option>Availability</option>
              </select>
            </div>
          </div>

          {filteredDonors.length === 0 ? (
            <div class="bg-surface-container-lowest rounded-xl p-12 text-center border border-surface-container text-secondary">
              <span class="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
              <p class="font-headline-md text-xl mb-2 text-on-surface">No Donors Found</p>
              <p>Try widening your search radius or resetting the filters.</p>
            </div>
          ) : (
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredDonors.map((donor) => (
                <div 
                  key={donor.id}
                  onMouseEnter={() => setHoveredDonorId(donor.id)}
                  onMouseLeave={() => setHoveredDonorId(null)}
                  class={`bg-surface-container-lowest p-6 rounded-xl border border-surface-container medical-soft-shadow card-hover-lift relative overflow-hidden group ${
                    hoveredDonorId === donor.id ? 'border-primary ring-1 ring-primary' : ''
                  }`}
                >
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-4">
                      <div class="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <img 
                          class="w-full h-full object-cover" 
                          alt={donor.name} 
                          src={donor.image}
                        />
                      </div>
                      <div>
                        <h3 class="font-bold text-lg text-on-surface">{donor.name}</h3>
                        <p class="text-sm text-secondary flex items-center gap-1">
                          <span class="material-symbols-outlined text-[16px]">location_on</span>
                          {donor.location} ({donor.distance} km)
                        </p>
                      </div>
                    </div>
                    <div class="bg-primary text-on-primary w-12 h-12 rounded-lg flex flex-col items-center justify-center font-bold flex-shrink-0">
                      <span class="text-[10px] uppercase leading-none opacity-80">Type</span>
                      <span class="text-xl">{donor.type}</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-3 mb-6">
                    <span class={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                      donor.status === 'Available' 
                        ? 'bg-[#E0F2F1] text-[#00796B]' 
                        : 'bg-[#FFF3E0] text-[#E65100]'
                    }`}>
                      <span class={`w-2 h-2 rounded-full ${
                        donor.status === 'Available' ? 'bg-[#00796B]' : 'bg-[#E65100]'
                      }`}></span>
                      {donor.status}
                    </span>
                    <span class="text-xs text-secondary italic">Last donated: {donor.lastDonated}</span>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <button class="py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary-fixed transition-colors cursor-pointer">
                      Profile
                    </button>
                    <button 
                      onClick={() => handleRequest(donor.name)}
                      class="py-2.5 rounded-lg bg-primary text-on-primary font-bold medical-soft-shadow hover:bg-[#d32f2f] transition-all cursor-pointer"
                    >
                      Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Interactive Proximity Map Preview */}
        <aside class="lg:col-span-4 order-1 lg:order-2">
          <div class="sticky top-24 space-y-6">
            <div class="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden medical-soft-shadow h-[320px] sm:h-[400px] lg:h-[500px] flex flex-col">
              <div class="p-4 border-b border-surface-variant flex items-center justify-between bg-surface">
                <h3 class="font-bold flex items-center gap-2 text-on-surface">
                  <span class="material-symbols-outlined text-primary">map</span>
                  Donor Proximity Map
                </h3>
              </div>
              <div class="flex-grow map-container relative bg-slate-50 overflow-hidden">
                {/* Simulated Pins */}
                {filteredDonors.map((donor) => (
                  <div 
                    key={donor.id}
                    style={{ top: donor.y, left: donor.x }}
                    class="absolute group z-10"
                  >
                    <div 
                      class={`text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-115 ${
                        donor.status === 'Available' ? 'bg-primary' : 'bg-secondary'
                      } ${hoveredDonorId === donor.id ? 'ring-4 ring-primary-fixed scale-110' : ''}`}
                    >
                      <span class="text-xs font-bold">{donor.type}</span>
                    </div>
                    {/* Tooltip */}
                    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-inverse-surface text-inverse-on-surface px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                      {donor.name} ({donor.distance} km)
                    </div>
                  </div>
                ))}
                
                {/* Map UI Controls */}
                <div class="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button class="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-surface-variant transition-colors border border-surface-variant/30 cursor-pointer">
                    <span class="material-symbols-outlined">add</span>
                  </button>
                  <button class="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-surface-variant transition-colors border border-surface-variant/30 cursor-pointer">
                    <span class="material-symbols-outlined">remove</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Critical Need Card */}
            <div class="bg-tertiary-container text-on-tertiary-container p-6 rounded-xl medical-soft-shadow">
              <div class="flex items-center gap-4 mb-4">
                <span class="material-symbols-outlined text-4xl">emergency</span>
                <h4 class="font-headline-md text-xl">Critical Need!</h4>
              </div>
              <p class="font-body-md mb-4 opacity-90 leading-relaxed">
                There is currently a severe shortage of O- and AB- blood types in your vicinity. Your requests might take longer to match.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
