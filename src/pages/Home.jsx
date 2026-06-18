import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function StatCounter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(target, 10);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elementRef} class="text-5xl md:text-6xl font-bold text-primary-fixed mb-2 tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section class="relative min-h-[80vh] lg:min-h-[870px] flex items-center justify-center overflow-hidden py-16">
        <div class="absolute inset-0 z-0">
          <img 
            class="w-full h-full object-cover" 
            alt="LifeLink volunteer smiling in blood donation center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyGnEA0V4Ridybxx2EayAUrRXPLOjqSBTkFHt_q9QYGDkGZukFKgWFMrlFTBZZ_kYXIMK56JiTVA64y2bUDaxfghfXmC5Pmtc_SViNQgKVQHvsV3li3SjN38iRfjIiHiqk8MsKV0t511loLLCWVaCwGE5d9lRknhNnj5WSYDeI-7eo-XE5ZASqz4PqzZZkPW3jsgUiNO6TLKlpVl-WYMo5vwcvGyRmW_LW7ttClUJPkTgFs7tjz5Sy5go-78S48LE_bShY0Zs7XLk"
          />
          <div class="absolute inset-0 hero-gradient"></div>
        </div>
        <div class="w-full relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center text-white">
          <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl mb-6 max-w-3xl mx-auto leading-tight font-bold">
            Donate Blood, Save Lives
          </h1>
          <p class="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Connecting donors, recipients, and blood banks with care and trust. Every drop you give is a lifeline for someone in need.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/donate')}
              class="bg-primary hover:bg-[#D32F2F] text-on-primary font-bold px-10 py-4 rounded-lg text-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              Donate Now
            </button>
            <button 
              onClick={() => navigate('/request-blood')}
              class="bg-surface/10 hover:bg-surface/20 backdrop-blur-md border border-white/30 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span class="material-symbols-outlined">emergency_share</span>
              Request Blood
            </button>
          </div>
        </div>
      </section>

      {/* Key Features (Bento Grid) */}
      <section class="py-24 w-full">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div class="mb-16 text-center">
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Empowering the Donation Ecosystem
            </h2>
            <p class="text-secondary font-body-md max-w-2xl mx-auto">
              Access critical services instantly through our streamlined healthcare platform designed for speed and reliability.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div class="md:col-span-2 bg-white p-8 rounded-xl border border-outline-variant card-hover-lift flex flex-col justify-between group">
              <div>
                <div class="w-14 h-14 bg-primary-container/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                  <span class="material-symbols-outlined text-primary-container text-3xl group-hover:text-white transition-colors">location_on</span>
                </div>
                <h3 class="font-headline-md text-headline-md mb-3 text-on-background">Find Nearby Blood Banks</h3>
                <p class="text-secondary font-body-md mb-6 leading-relaxed">
                  Locate certified blood collection centers and partner hospitals in your immediate vicinity using real-time GPS tracking.
                </p>
              </div>
              <button 
                onClick={() => navigate('/hospitals')}
                class="text-primary font-bold flex items-center gap-2 group/link cursor-pointer text-left"
              >
                Search Now <span class="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <div class="md:col-span-2 bg-white p-8 rounded-xl border border-outline-variant card-hover-lift flex flex-col justify-between group">
              <div>
                <div class="w-14 h-14 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-tertiary-container transition-colors">
                  <span class="material-symbols-outlined text-tertiary-container text-3xl group-hover:text-white transition-colors">person_search</span>
                </div>
                <h3 class="font-headline-md text-headline-md mb-3 text-on-background">Search Blood Donors</h3>
                <p class="text-secondary font-body-md mb-6 leading-relaxed">
                  Connect directly with registered donors of specific blood groups filtered by location and availability status.
                </p>
              </div>
              <button 
                onClick={() => navigate('/find-donors')}
                class="text-tertiary font-bold flex items-center gap-2 group/link cursor-pointer text-left"
              >
                Find Donors <span class="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <div class="md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant card-hover-lift group">
              <div class="w-14 h-14 bg-error-container/20 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-error text-3xl">emergency</span>
              </div>
              <h3 class="font-headline-md text-headline-md mb-3 text-on-background">Emergency Blood Requests</h3>
              <p class="text-secondary font-body-md leading-relaxed">
                Post an urgent requirement for blood and notify all nearby eligible donors within seconds to save a life in crisis.
              </p>
            </div>

            <div class="md:col-span-2 bg-white p-8 rounded-xl border border-outline-variant card-hover-lift group">
              <div class="w-14 h-14 bg-secondary-container/30 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-secondary text-3xl">monitoring</span>
              </div>
              <h3 class="font-headline-md text-headline-md mb-3 text-on-background">Track Donations</h3>
              <p class="text-secondary font-body-md leading-relaxed">
                Keep a digital record of your donations, rewards, and health check-ups. Receive alerts when you are eligible to donate again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section class="py-24 bg-surface-container-low">
        <div class="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-16">
            The Journey of a Life-Saver
          </h2>
          <div class="flex flex-col md:flex-row justify-between items-start gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div class="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 bg-outline-variant -z-0"></div>
            
            <div class="flex-1 flex flex-col items-center group relative z-10 w-full">
              <div class="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center mb-8 border-4 border-primary group-hover:scale-110 transition-transform duration-500">
                <span class="material-symbols-outlined text-5xl text-primary">app_registration</span>
              </div>
              <h4 class="font-headline-md text-headline-md mb-4 text-on-background">Register</h4>
              <p class="text-secondary leading-relaxed px-4">
                Sign up on our platform, provide your medical details, and find the nearest donation center.
              </p>
            </div>

            <div class="flex-1 flex flex-col items-center group relative z-10 w-full">
              <div class="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center mb-8 border-4 border-primary group-hover:scale-110 transition-transform duration-500">
                <span class="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bloodtype</span>
              </div>
              <h4 class="font-headline-md text-headline-md mb-4 text-on-background">Donate</h4>
              <p class="text-secondary leading-relaxed px-4">
                A quick screening followed by a comfortable donation process handled by experts.
              </p>
            </div>

            <div class="flex-1 flex flex-col items-center group relative z-10 w-full">
              <div class="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center mb-8 border-4 border-primary group-hover:scale-110 transition-transform duration-500">
                <span class="material-symbols-outlined text-5xl text-primary">favorite</span>
              </div>
              <h4 class="font-headline-md text-headline-md mb-4 text-on-background">Save Lives</h4>
              <p class="text-secondary leading-relaxed px-4">
                Your donation is processed and delivered to those who need it most, giving them a second chance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section class="py-24 bg-inverse-surface text-inverse-on-surface overflow-hidden relative">
        <div class="absolute top-0 right-0 opacity-10 pointer-events-none">
          <span class="material-symbols-outlined text-[400px]">vital_signs</span>
        </div>
        <div class="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div>
              <StatCounter target="15000" />
              <div class="font-body-md text-surface-variant">Total Donors</div>
            </div>
            <div>
              <StatCounter target="50000" />
              <div class="font-body-md text-surface-variant">Units Collected</div>
            </div>
            <div>
              <StatCounter target="120000" />
              <div class="font-body-md text-surface-variant">Lives Saved</div>
            </div>
            <div>
              <StatCounter target="500" suffix="" />
              <div class="font-body-md text-surface-variant">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-24 w-full">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-16 text-on-surface">
            Stories of Vitality
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col justify-between">
              <div>
                <div class="flex gap-1 mb-6 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p class="font-body-md text-secondary italic mb-8 leading-relaxed">
                  "LifeLink made the donation process incredibly smooth. The app reminded me when I was eligible, and the staff at the partner hospital were professional and caring."
                </p>
              </div>
              <div class="mt-auto flex items-center gap-4 border-t border-surface-variant/30 pt-4">
                <img 
                  class="w-12 h-12 rounded-full object-cover" 
                  alt="Regular donor Robert Chen" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZZRz8eDFl_fmmllVs15-iAWrI4GpHldD7pnL9voDGLBjYo8aCihm0n4ygmxR0o9sI_lCBxfabDRUmVz9_zRBt1_NRRgcDPdqLHnsHt5gSprB__fAVBl03FU7qyBRVEo31D2qV3GcxjNmZJUZI8_nHs361K_dyOmMAeBAU3wxNb4cLSFWtCn79XVZIr1Pl3Mw756nP51qFRs-qxV11ZU-MvWUufRXOrAHCGkB7MZ6OExCqhKjsCsfdfxLfmUzVwnBr-PI4YyZ_cQ"
                />
                <div>
                  <div class="font-bold text-on-surface">Robert Chen</div>
                  <div class="text-sm text-secondary">Regular Donor</div>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col justify-between">
              <div>
                <div class="flex gap-1 mb-6 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p class="font-body-md text-secondary italic mb-8 leading-relaxed">
                  "During an emergency surgery, we needed O negative blood urgently. LifeLink's request feature alerted donors nearby, and someone arrived within 45 minutes. Truly life-saving."
                </p>
              </div>
              <div class="mt-auto flex items-center gap-4 border-t border-surface-variant/30 pt-4">
                <img 
                  class="w-12 h-12 rounded-full object-cover" 
                  alt="Sarah Jenkins, recipient family member" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCyp-L8zw69rkubYfvH5IalTCPkTzpxLWrpNReQGeXBBBL10NVFIZXWqGoXzouaKhWS-g9z23NxJQsy_YPXvdxJIyjoc2Y10KaFG9VRhzrml_PblQELBlWkuKxhMUMXLRQFQ-RlwhJL_TQPxAJsOSp_Xexh0k0oqlVBt0wcEucARNHzQkTwa_Xs9F2izuJguBsVrg7WlBZSscWI3x_J5c8sc_Ez-scgJ7ZrOtA_4Qu2LEmdnbNMZFXIka2lXE654jxLauWQttCb9I"
                />
                <div>
                  <div class="font-bold text-on-surface">Sarah Jenkins</div>
                  <div class="text-sm text-secondary">Recipient Family</div>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col justify-between">
              <div>
                <div class="flex gap-1 mb-6 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p class="font-body-md text-secondary italic mb-8 leading-relaxed">
                  "I've donated 10 times through LifeLink. The gamification and tracking features keep me motivated to maintain my health and contribute to my community regularly."
                </p>
              </div>
              <div class="mt-auto flex items-center gap-4 border-t border-surface-variant/30 pt-4">
                <img 
                  class="w-12 h-12 rounded-full object-cover" 
                  alt="Bronze tier donor Mark Thompson" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQH8eRRu8l_XuYPVivhj1DdQC5TSleArRc1IG4g1__Uc3DLj5wtYSL22WgrZunxDV9k2CS4JDLmMMZ8pNTivm8XJ6Q_-rukmZ28mtzk2Jydk2PC6QVrXG_aacuEbsQ1lcdgyMFcMh2Rsq5aCAYvaaLzgDgpwdi9ZMlAHDurjvUqxZnrxPF08KqbSRekkVOB94um8IfnmiYmk-7iPZ6NybBVpUMUHM_51A4fdFSzX81gBepb2quA0GICiAprzXyZ7turlFuNNmBi6Q"
                />
                <div>
                  <div class="font-bold text-on-surface">Mark Thompson</div>
                  <div class="text-sm text-secondary">Bronze Tier Donor</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section class="py-20 w-full">
        <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div class="w-full bg-primary rounded-[2rem] p-12 text-center text-on-primary relative overflow-hidden group">
            <div class="absolute inset-0 opacity-10 pointer-events-none">
              <div class="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            </div>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 relative z-10">
              Every drop counts. Join our community of life-savers today.
            </h2>
            <p class="font-body-lg text-body-lg mb-10 opacity-90 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Your donation can save up to three lives. Start your journey as a hero today.
            </p>
            <div class="relative z-10">
              <button 
                onClick={() => navigate('/donate')}
                class="bg-white text-primary font-bold px-12 py-4 rounded-full text-lg hover:bg-surface-bright transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
