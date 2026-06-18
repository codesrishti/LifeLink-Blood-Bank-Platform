import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-16">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block">
              LifeLink
            </span>
            <p className="text-sm text-surface-variant/85 leading-relaxed max-w-[240px]">
              Connecting life-savers to those in need, one drop at a time.
            </p>
          </div>

          {/* Column 2: Mission Statement */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-primary">Mission Statement</h3>
            <p className="text-sm text-surface-variant/85 leading-relaxed max-w-[280px]">
              Our mission is to democratize access to safe blood and create a community of voluntary donors across the nation.
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/contact" className="text-sm text-surface-variant/85 hover:text-white transition-colors">
                  Emergency Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-surface-variant/85 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-surface-variant/85 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2.5 text-sm text-surface-variant/85">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                <a href="mailto:support@lifelink.org" className="hover:text-white transition-colors">
                  support@lifelink.org
                </a>
              </li>
              <li className="flex items-center space-x-2.5 text-sm text-surface-variant/85">
                <span className="material-symbols-outlined text-primary text-base">call</span>
                <a href="tel:18005433546" className="hover:text-white transition-colors">
                  1-800-LIFE-LINK
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-xs text-surface-variant/60">
          <p>© 2024 LifeLink Blood Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
