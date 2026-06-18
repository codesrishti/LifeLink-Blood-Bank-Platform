export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section class="relative w-full h-[500px] lg:h-[600px] overflow-hidden flex items-center">
        <div class="absolute inset-0 bg-gradient-to-r from-on-primary-fixed/80 to-transparent z-10"></div>
        <img 
          alt="Healthcare Team" 
          class="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtXvGGICRcUm3VM2XfBGxsptJF2nKZwiNJZ_hvp50sqKmAd55Fv45gKZnAnS4R6m6YnMn4mtTRjzBx_a5A-dhnl4OQAdKiAz1rlloh1Kax5fm3OStbAr8FZERrgdbxcjLD0R1PuO09wAingwyIr2Krwavbr6SHlx1DawF8zbBQouhimYkkcErchS4977d31P6zD7l8QnXoDuSSNpvFCvLfY7KkYCR74aGOge4hP-VSE_i5F0KIgjmiv0RFEFx88a23poRU2ZOCRZ0"
        />
        <div class="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white">
          <span class="bg-primary-container text-white px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block">
            Our Story
          </span>
          <h1 class="text-white font-headline-xl text-3xl sm:text-4xl md:text-headline-xl max-w-2xl mb-6 leading-tight">
            Connecting Life, One Drop at a Time.
          </h1>
          <p class="text-white/90 font-body-lg text-body-lg max-w-xl mb-8 leading-relaxed">
            Founded on the principle of human-centered vitality, LifeLink bridges the gap between those in need and those with the power to give.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <h2 class="text-primary font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 font-bold">Our Mission</h2>
              <p class="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                To provide a seamless, technology-driven ecosystem that ensures no life is lost due to the lack of blood availability, empowering local communities through transparency and speed.
              </p>
            </div>
            <div class="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/30 medical-soft-shadow">
              <h2 class="text-tertiary font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 font-bold">Our Vision</h2>
              <p class="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                To become the world's most trusted digital blood bank network, where every donation journey is celebrated and every emergency request is met with instant coordination.
              </p>
            </div>
          </div>
          <div class="relative w-full">
            <div class="aspect-square rounded-3xl overflow-hidden medical-soft-shadow w-full">
              <img 
                alt="Blood Donation Concept" 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpkj4NRcviN1IwbFHAfjr_K0XmJAJH14GHOZSwclUskGyRrcW7hFW263q9SJQzATVgKlKHHhM02sm3D4ql556YfWvF_h6RWJdDlluT3O1MH2IVG2QRPqg3IZ1mihGiiHd5P67ocE_ezc93W7aABVrAhyXfK3zlCW8Ec4dZo1KLWIX1YmVRGUuDTEQYW6ga-s3-YXwyrHSWNC2eAg4fAUmH2ZEysKK8rAT01H1daw5qLj0tvowLjTVQqoWFJeYcJe02Uu26o9Dfhqw"
              />
            </div>
            <div class="absolute -bottom-8 -left-8 bg-primary p-6 rounded-2xl text-white shadow-xl">
              <div class="font-headline-xl text-4xl md:text-headline-xl font-bold">50k+</div>
              <div class="font-label-md text-label-md opacity-90">Lives Impacted Yearly</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (Workflow) */}
      <section class="py-24 bg-surface-container-low">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">How We Work</h2>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            A transparent, efficient connection between hearts that care and lives that need.
          </p>
        </div>
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div class="flex flex-col items-center group text-center w-full">
            <div class="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 medical-soft-shadow group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-primary text-4xl">volunteer_activism</span>
            </div>
            <h3 class="font-headline-md text-headline-md mb-2 text-on-background">1. Donors</h3>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Selfless individuals register and schedule blood donations through our simple web interface.
            </p>
          </div>
          <div class="flex flex-col items-center group text-center w-full">
            <div class="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-white text-4xl">hub</span>
            </div>
            <h3 class="font-headline-md text-headline-md mb-2 text-on-background">2. LifeLink Hub</h3>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our smart routing technology matches donors with the nearest urgent requests and certified blood banks.
            </p>
          </div>
          <div class="flex flex-col items-center group text-center w-full">
            <div class="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 medical-soft-shadow group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-tertiary text-4xl">local_hospital</span>
            </div>
            <h3 class="font-headline-md text-headline-md mb-2 text-on-background">3. Recipients</h3>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Hospitals and patients receive life-saving blood supplies with real-time tracking and verification.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Meet the Lifesavers</h2>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            The dedicated team behind the scenes ensuring our platform remains reliable and clinical standards are met.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { name: 'Dr. Sarah Jenkins', role: 'Chief Medical Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxTvybag9W0k7qytPOOP8JAlAJfGuNYnUEqOQiy6aGM2oNxTilOEf2JTbrM9CTZGnBr-DkXRTF5yBq-tbubBhSUUNu-ypnRwmKU-UkQP9LYidHzkjYhLthrvoD6X4Hf3jVNhIck1Rrd6dzDpCzBagA0ughIz9yxpMD-Trm1SQIKNqB6n2H38LKF33dODMUIKnoXlbrZZ7sg9Gk4lucEc2dWj9aJZ9JYGQMAWeDb-tBJWP5Aqs-VAYlr1-xWNqIvAf004xgw6pFLkQ' },
            { name: 'Mark Chen', role: 'Co-Founder & CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvrfHFHOzMuG4zsryXyqMBq1yX1jAS4Z0UmRVn-JKKaxnJ4tB9hOJyDZ3zxpByPMpGGJXAMLtx_jHxcd8PIu8OGS-X0vV6k9XoCBOI8okhgFzHGOyeqHkPfpLsSfEsxDbhHaMV44LxI99fwE9nXAL-AngXNJ6CyXGgZ4MTJThL31AgfiVXpfnQg1SDPjCumsytqorfplPzzrRlnbbRbY-5T1PTLtyzoP24b9YW00_r33HMgOdcu2swAhsNEeriE_Pa7WEj6uPiq2A' },
            { name: 'Elena Rodriguez', role: 'Operations Director', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJW3yXAYpGFB5rVw2WyUzY9a29kgjSIYRNsuTUuCzAsEbAHOqVCeUlbF0s0_J75DpCvhVWYeRg8XjkjSKMYLi4PqVv_GdZNsyhbUT23m8Y0LF7AaWvyEf847AQKSyF5Pnni_l5P9s6nvVoCEKB1EJUoIeKFn5VinOMidPj5ZrrUrmfXtluyFnIvoP16WEwRC8ip69CeVjZ9nhJ4FN8fAKcBaJF2nmZoLatn-70wvz-s29bBLddFKcRBiPb2NUQIbsEBJetPBKithU' },
            { name: 'Dr. James Wilson', role: 'Hematology Advisor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApD3aLmPxo6gGOZHMkagFJ3IweR-yGmMxCcXw0Vnv0zOZU5QPFy_z5QuU9kC_FTealyrqHbTaku_4MOEyfpDmTWiL1NgXJWEyBLk10cZLiiWDrqHN8ZIMUaF1wGiIVo5LaPoO_OkoRKyc1csL7Zl6nDJ1WFUNOxDmXOL8V7lTT2xm9aQGju0wwb2734dKnYdWS_t7aubPEnlUYnCtX9kVXSL3Jge8ARlBa9Ev8n65r4SiFdHW3DXoFrue2EA_QZhkbru_Yc2Q0_lU' }
          ].map((member) => (
            <div key={member.name} class="bg-white rounded-xl overflow-hidden medical-soft-shadow group border border-outline-variant/25">
              <div class="h-64 overflow-hidden relative">
                <img 
                  alt={member.name} 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={member.img}
                />
              </div>
              <div class="p-6">
                <h4 class="font-headline-md text-headline-md text-on-surface font-bold">{member.name}</h4>
                <p class="text-primary font-label-md text-label-md">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Stats Section */}
      <section class="py-20 bg-primary text-white">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div class="font-headline-xl text-4xl md:text-headline-xl font-bold mb-2">120+</div>
            <div class="font-label-md text-label-md opacity-80 uppercase tracking-widest">Partner Hospitals</div>
          </div>
          <div>
            <div class="font-headline-xl text-4xl md:text-headline-xl font-bold mb-2">250k+</div>
            <div class="font-label-md text-label-md opacity-80 uppercase tracking-widest">Blood Units Donated</div>
          </div>
          <div>
            <div class="font-headline-xl text-4xl md:text-headline-xl font-bold mb-2">15m</div>
            <div class="font-label-md text-label-md opacity-80 uppercase tracking-widest">Average Response</div>
          </div>
          <div>
            <div class="font-headline-xl text-4xl md:text-headline-xl font-bold mb-2">10k+</div>
            <div class="font-label-md text-label-md opacity-80 uppercase tracking-widest">Active Volunteers</div>
          </div>
        </div>
      </section>
    </div>
  );
}
