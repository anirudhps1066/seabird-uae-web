import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Equipment = () => {
  const equipmentCategories = [
    {
      title: "Reverse Osmosis Systems",
      image: "/lovable-uploads/a4b05390-ac43-4dd8-93ed-8e1e22e48d22.png",
      description: "Complete RO water treatment facility with advanced filtration technology",
      features: ["High-pressure pumps", "Pre-treatment filters", "RO membranes", "Control systems"]
    },
    {
      title: "Chemical Dosing Systems",
      image: "/lovable-uploads/ad2e6488-1b85-4d0d-8332-90a5f1b4c000.png",
      description: "Automated chemical dosing equipment for water treatment processes",
      features: ["Calcium Chloride", "Sodium Bicarbonate", "Magnesium Sulfite", "Automated dosing"]
    },
    {
      title: "Membrane Filtration",
      image: "/lovable-uploads/db7f9c43-8724-452d-9ece-8a62b8d532e7.png",
      description: "Industrial membrane systems for water purification and treatment",
      features: ["UltraPac membranes", "High capacity", "Easy maintenance", "Long lifespan"]
    },
    {
      title: "Oxygen Concentrator",
      image: "/lovable-uploads/962a2c07-2e42-4fc0-9340-d9237a9680ea.png",
      description: "Medical and industrial oxygen generation equipment",
      features: ["Portable design", "Reliable operation", "Energy efficient", "Medical grade"]
    },
    {
      title: "Water Filter Housing",
      image: "/lovable-uploads/d5d159cd-663b-48a3-943c-603e93043c26.png",
      description: "Durable filter housings for various water treatment applications",
      features: ["Corrosion resistant", "Easy installation", "Multiple sizes", "Quality sealing"]
    }
  ];

  const specifications = [
    { category: "RO Systems", capacity: "1,000 - 50,000 GPD", applications: "Industrial, Commercial, Residential" },
    { category: "Sewage Treatment", capacity: "5 - 500 m³/day", applications: "Municipal, Industrial, Residential" },
    { category: "Chemical Dosing", capacity: "0.1 - 100 L/hr", applications: "Water Treatment, Pool Maintenance" },
    { category: "Filtration", capacity: "Various sizes", applications: "Pre-treatment, Post-treatment" }
  ];

  return (
    <section id="equipment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Equipment</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Premium Quality
            <span className="text-primary block">Water Treatment Equipment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We supply and install top-grade water treatment equipment from leading manufacturers, 
            ensuring reliability and efficiency for all your water treatment needs.
          </p>
        </div>

        {/* Equipment Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equipmentCategories.map((equipment, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {equipment.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {equipment.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {equipment.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications Table */}
        <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Equipment Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Capacity Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Applications</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-foreground">{spec.category}</td>
                    <td className="py-3 px-4 text-muted-foreground">{spec.capacity}</td>
                    <td className="py-3 px-4 text-muted-foreground">{spec.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Available Products */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Available Products & Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "RO Systems", "STP", "Swimming Pool Filters", "Water Purification Chemicals", 
              "All Types of Water Filters", "RO Membrane & Spare Parts", "Bottle Filling Machine Maintenance"
            ].map((product, index) => (
              <div key={index} className="bg-gradient-card border border-border/50 rounded-lg p-4 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <p className="text-sm font-medium text-foreground text-center">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;