import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+971 56 996 4568", "+971 52 784 5287", "+91 95674 75838"],
      type: "phone"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["seabirdwaterequip@gmail.com"],
      type: "email"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: [
        "New Ind. Area, Ajman, United Arab Emirates.",
        "Seabird Water Filtration System, Payyanur, Kannur, Kerala, India."
  
      ],
      type: "address"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday - Saturday: 9:00 AM - 5:00 PM"],
      type: "hours"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Get in Touch for
            <span className="text-primary block">Expert Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your water treatment needs? Our expert team is here to provide 
            personalized solutions and professional guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a complete water treatment system, equipment maintenance, 
                or expert consultation, we're here to help. Contact us today for a free assessment.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                        <div className="text-primary-foreground">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <Button variant="hero" size="lg" className="w-full">
    <Phone className="h-5 w-5" />
    Call Now
  </Button>

  <a
    href="https://wa.me/+918921013039?text=Hello, I am interested in your water treatment and purification solutions. Kindly share more details about your services. Thank you. - Sea Bird Website
"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <Button variant="hero" size="lg" className="w-full">
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </Button>
  </a>
</div>

          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Request a Quote
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address *
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number *
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Required
                </label>
                <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm">
                  <option value="">Select a service</option>
                  <option value="ro-system">Reverse Osmosis System</option>
                  <option value="sewage-treatment">Sewage Treatment Plant</option>
                  <option value="grey-water">Grey Water Treatment</option>
                  <option value="equipment-supply">Equipment Supply</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements, capacity needed, timeline, etc."
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;