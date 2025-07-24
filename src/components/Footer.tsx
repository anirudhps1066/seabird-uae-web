import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Droplets,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Equipment", href: "#equipment" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Reverse Osmosis Systems",
    "Sewage Treatment Plants",
    "Grey Water Treatment",
    "Chemical Dosing Systems",
    "Equipment Trading",
    "Maintenance Services"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-glow rounded-full flex items-center justify-center">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SEA BIRD</h3>
                <p className="text-xs text-primary-foreground/80">Water Treatment Equipment Trading</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Expert in providing optimal water treatment solutions since 2011. 
              We specialize in RO systems, sewage treatment, and comprehensive 
              equipment trading services across the UAE.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-glow rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-glow rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-glow rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-glow rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-glow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">+971 56 996 4568</p>
                  <p className="text-primary-foreground/80 text-sm">+971 52 784 5287</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-glow mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">seabirdwaterequip@gmail.com</p>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">New Ind. Area, Ajman</p>
                  <p className="text-primary-foreground/80 text-sm">United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Sea Bird Water Treatment Equipment Trading LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-glow transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-glow transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-glow transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;