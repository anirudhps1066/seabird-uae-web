import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Factory, 
  Recycle, 
  Filter, 
  Settings, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Reverse Osmosis Treatment",
      description: "A water purification process that uses a semi-permeable membrane and applied pressure to remove ions, unwanted molecules, and larger particles from water. @ 3000 gpd to 300000 galleons pre day available.",
      features: ["Pre-treatment filters", "High-pressure pumps", "RO membrane modules", "Flow monitoring systems"]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Sewage Water Treatment",
      description: "Comprehensive sewage treatment solutions including collection systems, biological reactors, and disinfection units for domestic and industrial applications.",
      features: ["Collection tanks & piping", "Biological reactors (MBR)", "Clarifiers & membranes", "UV disinfection units"]
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Grey Water Treatment",
      description: "Efficient grey water treatment systems for water reuse, including physical, chemical, and biological contaminant removal processes.",
      features: ["Physical treatment", "Chemical processing", "Biological contaminants removal", "Water recycling systems"]
    },
    {
      icon: <Filter className="h-8 w-8" />,
      title: "Water Purification Systems",
      description: "Advanced water purification solutions including swimming pool maintenance, chemical dosing, and all types of water filtration systems.",
      features: ["Swimming pool filters", "Chemical dosing systems", "Multi-stage filtration", "Water quality monitoring"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Equipment Trading",
      description: "Supply and trading of high-quality water treatment equipment, spare parts, and specialized components for various industrial applications.",
      features: ["RO membranes & parts", "Pumps & pressure vessels", "Control systems", "Replacement filters"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Installation & Maintenance",
      description: "Professional installation, commissioning, and ongoing maintenance services for all water treatment systems and equipment.",
      features: ["System installation", "Commissioning services", "Preventive maintenance", "24/7 technical support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Comprehensive Water
            <span className="text-primary block">Treatment Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From reverse osmosis systems to complete sewage treatment plants, 
            we provide end-to-end water treatment solutions for every need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow group-hover:shadow-elegant transition-all duration-300">
                  <div className="text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team can design and implement tailored water treatment systems 
              to meet your specific requirements and industry standards.
            </p>
            <Button variant="hero" size="xl">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;