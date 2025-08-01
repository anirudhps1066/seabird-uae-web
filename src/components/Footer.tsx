import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Products", href: "/#products" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

const services = [
  "RO Systems",
  "STP Plants",
  "Swimming Pool Filters",
  "Water Purification Chemicals",
  "Water Filter Spares",
  "RO Membranes",
  "Filling Machine Maintenance",
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
   <footer className="bg-gradient-to-br from-[#203753] to-[#051c30] text-white shadow-inner shadow-blue-900/20">
  <div className="container mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Logo and About */}
      <div>
        <div className="bg-white p-3 rounded-xl inline-block shadow-lg shadow-blue-900/40">
          <img
            src={logo}
            alt="Sea Bird Logo"
            className="h-20 w-auto object-contain"
          />
        </div>
        <p className="mt-4 text-sm text-white/80 leading-relaxed">
          Providing optimal solutions for water treatment, sewage disposal,
          and purification systems since 2011 across the UAE.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-6">
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-full transition duration-300 shadow-md shadow-blue-900/30"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-white">
          Quick Links
        </h4>
        <ul className="space-y-2 text-sm text-white/80">
          {quickLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-white">
          Our Services
        </h4>
        <ul className="space-y-2 text-sm text-white/80">
          {services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-white">
          Contact Info
        </h4>
        <div className="space-y-4 text-sm text-white/80">
          <div className="flex gap-3 items-start">
            <Phone className="text-cyan-400 w-5 h-5 mt-1" />
            <div>
              <p>+971 56 996 4568</p>
              <p>+971 52 784 5287</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Mail className="text-cyan-400 w-5 h-5 mt-1" />
            <p>seabirdwaterequip@gmail.com</p>
          </div>
          <div className="flex gap-3 items-start">
            <MapPin className="text-cyan-400 w-5 h-5 mt-1" />
            <div>
              <p>New Ind. Area, Ajman</p>
              <p>United Arab Emirates</p>
            </div>

          </div>
          <div className="flex gap-3 items-start">
            <MapPin className="text-cyan-400 w-5 h-5 mt-1" />
            <div>
             <p>Seabird Water Filtration System</p>
             <p>Payyanur, Kannur, Kerala</p>
             <p>+91 95674 75838</p>

            </div>
            
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer Section */}
    <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
      <p>
        © {currentYear} Sea Bird Water Treatment Equipment Trading LLC. All
        rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-cyan-400 transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-cyan-400 transition">
          Terms
        </a>
        <a href="#" className="hover:text-cyan-400 transition">
          Sitemap
        </a>
      </div>
    </div>
  </div>
</footer>

  );
}
