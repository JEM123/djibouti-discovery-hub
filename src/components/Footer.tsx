
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">Djibouti</span>
              <span className="font-display text-2xl font-light text-sand-300">Explorer</span>
            </Link>
            <p className="text-white/70 mb-6">
              Découvrez la beauté cachée de Djibouti, un joyau au carrefour de l'Afrique et du Moyen-Orient.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explorer</h4>
            <ul className="space-y-3">
              {['Accueil', 'Destinations', 'Activités', 'Hébergements', 'Gastronomie'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={index === 0 ? '/' : '#'} 
                    className="text-white/70 hover:text-sand-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-3">
              {['À Propos', 'Services', 'Témoignages', 'FAQ', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to="#" 
                    className="text-white/70 hover:text-sand-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-sand-300 mt-0.5" />
                <span className="text-white/70">
                  Boulevard de Bender, Djibouti Ville, République de Djibouti
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-sand-300" />
                <a 
                  href="mailto:info@djibouti-explorer.com" 
                  className="text-white/70 hover:text-sand-300 transition-colors"
                >
                  info@djibouti-explorer.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-sand-300" />
                <a 
                  href="tel:+25321000000" 
                  className="text-white/70 hover:text-sand-300 transition-colors"
                >
                  +253 21 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Djibouti Explorer. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
