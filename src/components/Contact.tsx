import { useState } from "react";
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
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
  const { firstName, lastName, email, phone, service, details } = form;

  if (!firstName || !lastName || !email || !phone) {
    toast.error("Please fill all required fields");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address");
    return;
  }

  toast.success("Form submitted! Redirecting to WhatsApp...");

  const message = `Hello Sea Bird Water Equipment Team,

My name is ${firstName} ${lastName}.

📧 Email: ${email}
📞 Phone: ${phone}

🛠️ Service Required: ${service || "N/A"}
📝 Project Details:
${details || "N/A"}

Looking forward to hearing from you.

Best regards,
${firstName} ${lastName}`;

  // Always encode full message
  const encodedMessage = encodeURIComponent(message);

  // Correct URL
  const whatsappURL = `https://wa.me/971569964568?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};



  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+971 56 996 4568", "+971 52 784 5287", "+91 95674 75838"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@seabirdwaterequipment.com", 'sales@seabirdwaterequipment.com'],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: [
        "New Ind. Area, Ajman, United Arab Emirates.",
        "Seabird Water Filtration System, Payyanur, Kannur, Kerala, India.",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday to Saturday: 8:00 AM – 6:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                        <div className="text-primary-foreground">{info.icon}</div>
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => window.location.href = 'tel:+971569964568'}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>

              <a
                href="https://wa.me/+971569964568?text=Hello%2C%20I%20came%20across%20your%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20water%20treatment%2C%20sewage%20disposal%2C%20and%20industrial%20purification%20services.%0ACould%20you%20please%20provide%20more%20information%20regarding%20your%20solutions%2C%20pricing%2C%20and%20available%20consultation%20slots%3F%0AThank%20you%20in%20advance.%0A-%20Website%20Inquiry%20via%20Sea%20Bird%20Water%20Equipment"
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

          {/* Form */}
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
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                  <Input name="firstName" placeholder="Enter your first name" value={form.firstName} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                  <Input name="lastName" placeholder="Enter your last name" value={form.lastName} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                <Input name="email" type="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                <Input name="phone" type="tel" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service Required</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
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
                <label className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                <Textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, capacity needed, timeline, etc."
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full" onClick={handleSubmit}>
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
