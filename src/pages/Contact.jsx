import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 3000);
    }, 1500);
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=San+Francisco+California', '_blank');
  };

  return (
    <div class="min-h-screen">
      {/* Hero Section */}
      <section class="relative py-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div class="w-full max-w-container-max mx-auto relative z-10">
          <div class="md:w-2/3">
            <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl text-on-background mb-6 leading-tight">
              We're here to help you save lives.
            </h1>
            <p class="font-body-lg text-body-lg text-secondary mb-8 max-w-2xl leading-relaxed">
              Whether you're a donor with a question, a hospital in need of support, or a community member looking to volunteer, our team is ready to assist 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section class="py-12 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div class="w-full max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Contact Form Section (Left) */}
          <div class="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-medical-soft border border-outline-variant/30">
            <div class="mb-8">
              <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-2">Get in Touch</h2>
              <p class="font-body-md text-secondary">Fill out the form below and our medical coordination team will respond within 2-4 business hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label class="font-label-md text-on-surface-variant font-semibold" for="name">Name</label>
                  <input 
                    required
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-bright focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all outline-none font-body-md" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="font-label-md text-on-surface-variant font-semibold" for="email">Email</label>
                  <input 
                    required
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-bright focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all outline-none font-body-md" 
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-label-md text-on-surface-variant font-semibold" for="subject">Subject</label>
                <select 
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  class="h-12 px-4 rounded-lg border border-outline-variant bg-surface-bright focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all outline-none font-body-md px-4"
                >
                  <option value="">Select a reason for contacting</option>
                  <option value="donation">Blood Donation Inquiry</option>
                  <option value="request">Blood Request / Emergency</option>
                  <option value="volunteer">Volunteering Opportunities</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="flex flex-col gap-2">
                <label class="font-label-md text-on-surface-variant font-semibold" for="message">Message</label>
                <textarea 
                  required
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  class="p-4 rounded-lg border border-outline-variant bg-surface-bright focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all outline-none resize-none font-body-md" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || submitSuccess}
                class={`w-full md:w-auto px-10 py-4 font-label-md rounded-lg shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-white font-bold ${
                  submitSuccess ? 'bg-[#00796B]' : 'bg-primary hover:opacity-90'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span class="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                    <span>Sending...</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <span class="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span class="material-symbols-outlined text-[20px]">send</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details Section (Right) */}
          <div class="lg:col-span-5 space-y-6 w-full">
            {/* Emergency Helpline Card */}
            <div class="bg-primary text-on-primary rounded-xl p-8 shadow-lg relative overflow-hidden group">
              <div class="relative z-10 text-white">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                  </div>
                  <span class="font-label-md tracking-wider uppercase opacity-90 text-sm">Emergency Services</span>
                </div>
                <h3 class="font-headline-md text-headline-md mb-2 text-white font-bold">24/7 Helpline</h3>
                <p class="font-body-md mb-6 opacity-80 leading-relaxed">Immediate blood requirements and medical emergencies.</p>
                <a class="inline-flex items-center gap-3 font-headline-lg text-headline-lg-mobile md:text-headline-lg hover:underline transition-all text-white font-bold" href="tel:18005555433">
                  1-800-555-LIFE
                </a>
              </div>
              <span class="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                support_agent
              </span>
            </div>

            {/* Contact Details Card */}
            <div class="bg-surface-container-lowest rounded-xl p-8 shadow-medical-soft border border-outline-variant/30 space-y-8">
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-on-tertiary-fixed">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 class="font-label-md text-on-surface-variant font-bold mb-1">Our Headquarters</h4>
                  <p class="font-body-md text-on-surface leading-relaxed">1221 Medical Plaza Dr, Suite 400<br/>San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-on-tertiary-fixed">
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 class="font-label-md text-on-surface-variant font-bold mb-1">Email Addresses</h4>
                  <p class="font-body-md text-on-surface">General: contact@lifelink.org</p>
                  <p class="font-body-md text-on-surface">Donations: donors@lifelink.org</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-on-tertiary-fixed">
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 class="font-label-md text-on-surface-variant font-bold mb-1">Phone Support</h4>
                  <p class="font-body-md text-on-surface">Main: (555) 123-4567</p>
                  <p class="font-body-md text-on-surface">Support: (555) 987-6543</p>
                </div>
              </div>

              <div class="pt-6 border-t border-outline-variant/30">
                <h4 class="font-label-md text-on-surface-variant font-bold mb-4">Follow Our Journey</h4>
                <div class="flex gap-4">
                  <a class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300" href="#">
                    <svg class="w-6 h-6 fill-current" viewbox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                  </a>
                  <a class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300" href="#">
                    <svg class="w-6 h-6 fill-current" viewbox="0 0 24 24"><path d="M12.315 2c2.43 0 2.717.01 3.67.053 1.026.047 1.587.213 1.958.358.491.19.842.418 1.211.787.37.37.597.721.787 1.211.145.372.311.932.358 1.958.042.953.053 1.24.053 3.67s-.011 2.717-.053 3.67c-.047 1.027-.213 1.587-.358 1.958-.19.491-.418.842-.787 1.211-.37.37-.721.597-1.211.787-.372.145-.932.311-1.958.358-.953.042-1.24.053-3.67.053s-2.717-.011-3.67-.053c-1.027-.047-1.587-.213-1.959-.358-.49-.19-.842-.418-1.211-.787-.37-.37-.597-.721-.787-1.211-.144-.372-.311-.932-.358-1.958-.043-.953-.053-1.24-.053-3.67s.01-2.717.053-3.67c.047-1.026.213-1.587.358-1.958.19-.49.418-.842.787-1.211.37-.37.721-.597 1.211-.787.371-.145.932-.311 1.958-.358.953-.043 1.24-.053 3.67-.053zm0-2c-2.473 0-2.783.01-3.756.055-1.012.045-1.703.206-2.308.441-.625.243-1.155.568-1.683 1.097-.53.528-.854 1.058-1.097 1.683-.235.605-.396 1.296-.441 2.308C3.01 9.531 3 9.841 3 12.315s.01 2.783.055 3.756c.045 1.012.206 1.703.441 2.308.243.625.568 1.155 1.097 1.683.528.53 1.058.854 1.683 1.097.605.235 1.296.396 2.308.441.973.045 1.283.055 3.756.055s2.783-.01 3.756-.055c1.012-.045 1.703-.206 2.308-.441.625-.243 1.155-.568 1.683-1.097.53-.528.854-1.058 1.097-1.683.235-.605.396-1.296.441-2.308.045-.973.055-1.283.055-3.756s-.01-2.783-.055-3.756c-.045-1.012-.206-1.703-.441-2.308-.243-.625-.568-1.155-1.097-1.683-.528-.53-1.058-.854-1.683-1.097-.605-.235-1.296-.396-2.308-.441-.973-.045-1.283-.055-3.756-.055z"></path><path d="M12.315 7.541c-2.636 0-4.774 2.138-4.774 4.774s2.138 4.774 4.774 4.774 4.774-2.138 4.774-4.774-2.138-4.774-4.774-4.774zm0 7.548c-1.532 0-2.774-1.242-2.774-2.774s1.242-2.774 2.774-2.774 2.774 1.242 2.774 2.774-1.242 2.774-2.774 2.774zm5.12-8.775c0 .551-.447 1-1 1s-1-.449-1-1 .447-1 1-1 1 .449 1 1z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="w-full h-[300px] sm:h-[450px] relative border-t border-outline-variant/30 cursor-pointer" onClick={handleMapClick}>
        <div class="absolute inset-0 bg-surface-container-highest">
          <img 
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            alt="LifeLink Headquarters Map Location" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoyBNNt7nRg6YJV5Ik7Z8S8SMGBVE8EpCG_FkNCyuoa9KZUTzW9IrgnLO3VElQcv4UcGk5F49UHxNBMy3cnVyXy-Gylp-KHZ0ursEZfF4xwdY_bGQPO8eRF2tdU2i2zknob5OHIgMrl4V8OhkiTIUam74jy9t8BIy-46_Lf7yn_-0exzUivjaZDV467sb9GGJAhExsbR-tiX9B8opr06FTfl2fb9htigjzJ0hSEWux5pGnvJfWBLen6JmDTuwt1SZ7ibaY5H9ZcHU"
          />
          {/* Interactive Pin overlay */}
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div class="bg-primary text-on-primary p-3 rounded-full shadow-lg animate-bounce">
              <span class="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div class="bg-surface-container-lowest px-4 py-2 rounded-lg shadow-xl mt-2 border border-outline-variant text-center font-bold text-sm text-on-surface">
              LifeLink HQ
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 px-margin-mobile md:px-margin-desktop bg-surface text-center">
        <div class="w-full max-w-container-max mx-auto">
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-on-background">Ready to make a difference?</h2>
          <p class="font-body-lg text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            Your single donation can save up to three lives. Join our community of heroes today.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate('/donate')}
              class="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold shadow-md hover:bg-primary-container transition-all cursor-pointer"
            >
              Schedule Appointment
            </button>
            <button 
              onClick={() => navigate('/camps')}
              class="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all cursor-pointer"
            >
              Find a Blood Drive
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
