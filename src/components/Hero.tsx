import { Button } from "@/components/ui/button";
import { Droplets, Award, Users, Phone } from "lucide-react";
import heroImage from "@/assets/hero-water-treatment.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Water Treatment Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Expert Water
              <span className="block text-primary-glow">Treatment Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Providing optimal solutions for water treatment, sewage disposal, and industrial water purification systems across the UAE since 2011.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl">
              <Phone className="h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button variant="premium" size="xl">
              View Our Equipment
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="p-3 bg-primary-glow/20 rounded-full">
                <Droplets className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">10+</h3>
                <p className="text-primary-foreground/80">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="p-3 bg-primary-glow/20 rounded-full">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">500+</h3>
                <p className="text-primary-foreground/80">Projects Completed</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="p-3 bg-primary-glow/20 rounded-full">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">100+</h3>
                <p className="text-primary-foreground/80">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;