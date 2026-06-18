import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: 1,
    title: '5 Nutrients to Boost Your Iron Levels Before Donating',
    tag: 'Health Tips',
    tagStyle: 'bg-tertiary-container text-on-tertiary-container',
    desc: 'Preparing your body is just as important as the act of giving. Learn which seasonal foods help maintain optimal iron levels for a safe experience.',
    date: 'Oct 24, 2026',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdvBbXAGe7rO0Vedn7O2aGwNp-oogU2CBkpDB8llTGLqFZzVHct_gko2oTlMIYChszXchuPNpY1vHeYx-FET1-F62gh3CH9ggmnVyrizhCFc3gBJcxqw0b3wVOMbVQI2_mNHgvJxCll2eFyePCDroIvsxeSwSkYnWSqtpC3WBd_WkSKSUcNwkLW0yG5OKjsOfuDE8FzKSdm_qzeOO7c7Y8xnNBerXNEChnqftGYH_gcwhHeF-181unSDYAX2wStlEEIQ-jNJLfSyU'
  },
  {
    id: 2,
    title: 'Common Misconceptions About Rare Blood Groups',
    tag: 'Myths vs Facts',
    tagStyle: 'bg-secondary-container text-on-secondary-container',
    desc: 'Does your blood type really determine your personality? We debunk the biggest myths surrounding blood biology and donor compatibility.',
    date: 'Nov 12, 2026',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD558RAshWMz5hc4aqj9N83Fum-tZqSnTa5xxvtspCKoWM5a5GgPA_Bf0ERG0jc4u2b26ZM3DniBKCAeaLL5C1Y3N5gvXyESXy4PCrmmn1IdgJoeHSFKYqwtnbQtNXyU0mQe929WjyZC0jsyKU6wt11NiACpmyR_dCJDo7PFZ4ZGK7-5pvhn6aoVu2d4rRfxKwMtYbNgOcpBs0QZN5fJOPyk16s1xQ4I3xgG0b4PMWnZDfwuezkJIRIzhFS26Q56Pce7mQf1no7DGg'
  },
  {
    id: 3,
    title: "Finding Hope: Sarah's Journey Through Recovery",
    tag: 'Success Stories',
    tagStyle: 'bg-primary-fixed-dim text-on-primary-fixed-variant',
    desc: 'A heartwarming story of how a timely platelet transfusion changed everything for a local teacher during her battle with leukemia.',
    date: 'Dec 05, 2026',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb0zpPDmkaspazcVtgL073nURIAZihC2HLU09BogUqGWwW4h2mwrBdbmm-jB1mrDb5LrQaDnNxqUKdirnogNj_noqGmUTCrF4FDOgEyatJCefwh7s7hREgOwl27Qg_ogvMw3-QZ9Nrum4_z8LmI1XriW6tRxK-wH82KKTcnH1duizfELD50iyT8KDvmqzr3ZDEPJw_1gpiwZFp1_Y3aKKuXUE0MtXSOj2etSAWjZWLi2ECqP2_6RqjJPcaGsV8kQLbMRfkyvjJVkA'
  },
  {
    id: 4,
    title: 'O-Negative Shortage: Why Universal Donors Are Vital',
    tag: 'Emergency Needs',
    tagStyle: 'bg-error-container text-on-error-container',
    desc: 'The holiday season often brings a drop in donations. We explore why O-Negative blood is critical for emergency rooms worldwide right now.',
    date: 'Jan 02, 2027',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3nSOh-E0aXbydRcMs1ZgdgyLlFW9Lp9mkcaw0bIq4ri4FRsJXBAVdGhx0Fzl4hCSyClnoSZ1ovLIrvfUSb3mk9g7o1xg5SOOJZsI8fu3AJvbEYwrvgTuGPaf3Aa-czjmmv4gKLFQb9ugLjp5dLir0X-1sBLqZ_5bbIsGb3salanuH79A9tEtPfEWJjAWGX0Es9tkaS4vz8dWERgf-8t3WBWSLqPL4CHvuK_P4VpiUHnUffRzHYRomQWJBiliyo-XyFTzKcANWUZg'
  }
];

export default function Blog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.tag === selectedCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const categories = [
    { name: 'All', count: BLOG_POSTS.length },
    { name: 'Health Tips', count: 1 },
    { name: 'Emergency Needs', count: 1 },
    { name: 'Success Stories', count: 1 },
    { name: 'Myths vs Facts', count: 1 }
  ];

  return (
    <div class="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Header */}
      <section class="mb-12">
        <h1 class="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl mb-4 text-on-surface">Awareness &amp; Insights</h1>
        <p class="text-secondary text-body-lg max-w-2xl leading-relaxed">
          Empowering our community through knowledge. Stay informed about blood donation impact, health tips, and life-saving stories.
        </p>
      </section>

      {/* Featured Article */}
      <section class="mb-16">
        <div class="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden group cursor-pointer medical-soft-shadow">
          <div 
            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-103" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHUAInsXK2rCjuus6rYwSC8kRBUo0Il8ErmTnhXJXwhyt1F0N1wU6IKnvJbwPObEJ4Ej1H8tzbNC3Dnw2izkMcKBCFfV_YRnx52OwF3SdmmvaueEiTPNidUZChNQ-cCDkpjMwieSm45UPR3QiMWhL5aFqlQ9tjE6hinyyvEnNyvXsucQW9_-7W-0M8_RCfCZXawU_eYUSsryNhFR_Dw6A4r-rtGWTSTRgV57IqZkgFqaljP0SIKowFc2awv-B8qPwaEDHRwf_RMLk')" }}
          ></div>
          <div class="absolute inset-0 hero-gradient flex flex-col justify-end p-8 md:p-12 text-white">
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured Story</span>
              <span class="text-white/80 text-sm">8 min read</span>
            </div>
            <h2 class="text-white font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 max-w-3xl font-bold">
              The Ripple Effect: How One Single Donation Can Save Up to Three Lives
            </h2>
            <p class="text-white/95 text-body-lg max-w-2xl mb-6 hidden md:block leading-relaxed">
              Understanding the journey of donated blood from the arm of a volunteer to the hospital bed of a patient in need.
            </p>
            <button class="w-fit bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-surface-bright transition-all cursor-pointer">
              Read Full Article
            </button>
          </div>
        </div>
      </section>

      <div class="flex flex-col lg:flex-row gap-gutter">
        {/* Blog Grid (Main Content) */}
        <div class="flex-grow lg:w-3/4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {filteredPosts.map((post) => (
              <div key={post.id} class="bg-surface-container-lowest rounded-xl overflow-hidden medical-soft-shadow card-hover-lift border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <div class="h-48 overflow-hidden relative">
                    <img 
                      class="w-full h-full object-cover transition-transform duration-500" 
                      alt={post.title} 
                      src={post.img}
                    />
                    <span class={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${post.tagStyle}`}>
                      {post.tag}
                    </span>
                  </div>
                  <div class="p-6">
                    <h3 class="font-headline-md text-headline-md mb-3 text-on-surface font-bold leading-snug">{post.title}</h3>
                    <p class="text-secondary text-body-md mb-6 leading-relaxed line-clamp-3">{post.desc}</p>
                  </div>
                </div>
                
                <div class="px-6 pb-6 pt-4 border-t border-surface-variant/30 flex items-center justify-between">
                  <span class="text-sm text-secondary">{post.date}</span>
                  <button class="text-primary font-bold flex items-center gap-1 group cursor-pointer">
                    Read More 
                    <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div class="mt-12 flex justify-center gap-2">
            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all cursor-pointer">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all cursor-pointer">2</button>
            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all cursor-pointer">
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Sidebar/Filter */}
        <aside class="lg:w-1/4 space-y-8 w-full">
          {/* Categories */}
          <div class="bg-surface-container rounded-xl p-6 shadow-sm">
            <h4 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2 font-bold">
              <span class="material-symbols-outlined text-primary">category</span>
              Categories
            </h4>
            <ul class="space-y-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <button 
                    onClick={() => setSelectedCategory(cat.name)}
                    class={`w-full flex items-center justify-between text-left p-2 rounded-lg transition-colors group cursor-pointer ${
                      selectedCategory === cat.name 
                        ? 'bg-primary text-white font-bold' 
                        : 'text-on-surface hover:text-primary hover:bg-white/50'
                    }`}
                  >
                    <span class="font-label-md">{cat.name}</span>
                    <span class={`px-2 py-0.5 rounded text-xs font-bold ${
                      selectedCategory === cat.name ? 'bg-white text-primary' : 'bg-white text-secondary'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Card */}
          <div class="bg-primary-container text-on-primary-container rounded-xl p-8 medical-soft-shadow overflow-hidden relative shadow-md">
            <div class="relative z-10 text-white">
              <h4 class="font-headline-md text-headline-md mb-4 text-white font-bold">Join Our Circle</h4>
              <p class="text-white/80 text-sm mb-6 leading-relaxed">
                Receive monthly updates on donation drives and heart-touching stories directly in your inbox.
              </p>
              
              {subscribed ? (
                <div class="bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white animate-pulse flex items-center gap-2">
                  <span class="material-symbols-outlined text-sm">check_circle</span>
                  <span>Successfully subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} class="space-y-4">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm outline-none" 
                    placeholder="Email Address" 
                  />
                  <button type="submit" class="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-surface-bright transition-colors cursor-pointer">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
            <div class="absolute -bottom-8 -right-8 opacity-10 pointer-events-none">
              <span class="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
          </div>

          {/* Emergency Sidebar Banner */}
          <div class="bg-error-container p-6 rounded-xl border-l-4 border-error shadow-sm">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-error mt-1">emergency</span>
              <div>
                <h5 class="font-label-md text-on-error-container mb-1 font-bold text-sm">Critical Need: O- Blood</h5>
                <p class="text-xs text-on-error-container opacity-80 mb-3 leading-relaxed">
                  Our central bank is currently low on O-Negative supply. Can you help today?
                </p>
                <button 
                  onClick={() => navigate('/donate')}
                  class="text-xs font-bold text-error underline hover:text-[#af101a] transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Find nearest center
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
