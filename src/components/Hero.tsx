import { Button } from "@/components/ui/button";
import { Droplets, Award, Users, Phone } from "lucide-react";
import heroImage from "@/assets/hero-water-treatment.jpg";
import CountUp from 'react-countup';



const Hero = () => {
 

// Move stats array definition here, before return
const stats = [
  { Icon: Droplets, value: 10, suffix: "+", label: "Years Experience" },
  { Icon: Award, value: 500, suffix: "+", label: "Projects Completed" },
  { Icon: Users, value: 100, suffix: "+", label: "Satisfied Clients" },
];

return (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background Image + Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt="Water Treatment Facility"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 to-[#193755]/60"></div>
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl animate-fadeInUp">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Expert Water
            <span className="block text-cyan-400">Treatment Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
            Providing optimal solutions for water treatment, sewage disposal, and industrial water purification systems across the UAE since 2011.
          </p>
        </header>

        {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            variant="hero"
            size="xl"
            className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg"
          >
            <Phone className="h-5 w-5 mr-2" />
            Get Free Consultation
          </Button>
          <Button
            variant="premium"
            size="xl"
            className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
            onClick={() => {
            window.location.href = "#equipment";
            }}
          >
            View Our Equipment
          </Button>
          </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ Icon, value, suffix, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="p-3 bg-cyan-500/20 rounded-full">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  <CountUp end={value} duration={3} suffix={suffix} />
                </h3>
                <p className="text-white/80">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
