import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const features = [
    "Expert in water treatment solutions since 2011",
    "Comprehensive equipment trading services",
    "Industrial and domestic water systems",
    "Professional installation and maintenance",
    "Quality assurance and testing",
    "24/7 customer support",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="text-primary font-semibold text-lg">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Leading Water Treatment
                <span className="text-primary block">Equipment Provider</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sea Bird Water Treatment Equipment Trading LLC has been at the forefront of providing 
                optimal water treatment solutions since 2011. Based in Ajman, UAE, we specialize in 
                meeting the growing demands for clean water and efficient wastewater management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans across reverse osmosis systems, sewage treatment plants, 
                grey water treatment, and comprehensive equipment trading services for both 
                industrial and domestic applications.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide innovative and sustainable water treatment solutions that ensure clean, 
                  safe water for communities and industries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading water treatment equipment provider in the UAE, 
                  setting industry standards for quality and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 sm:col-span-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Quality, integrity, innovation, and customer satisfaction drive everything we do. 
                  We believe in building long-term relationships through exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;