import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  Cog,
  HeadphonesIcon,
  Code,
  Globe,
  LineChart,
  Database,
  Shield,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    icon: Lightbulb,
    title: "IT Consulting & Strategy",
    description:
      "Navigate the digital landscape with confidence. We help you develop comprehensive digital roadmaps, evaluate technology options, and make strategic decisions that align with your business objectives.",
    features: [
      "Digital transformation roadmaps",
      "Technology stack evaluation",
      "System analysis and recommendations",
      "IT budget planning and optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Product Development Advisory",
    description:
      "Turn your ideas into reality with expert guidance. We provide strategic direction and technical oversight throughout your product development journey, ensuring you build the right thing the right way.",
    features: [
      "Web application guidance",
      "Mobile app development planning",
      "Platform architecture design",
      "MVP strategy and execution",
    ],
  },
  {
    icon: Cog,
    title: "Workflow Automation & Optimization",
    description:
      "Streamline your operations and boost efficiency. We identify bottlenecks, automate repetitive tasks, and integrate your software tools to create seamless workflows that save time and reduce errors.",
    features: [
      "Process automation implementation",
      "Software integration solutions",
      "Business efficiency analysis",
      "Custom automation tools",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support for Brands",
    description:
      "Keep your digital operations running smoothly. We provide ongoing maintenance, troubleshooting, and proactive tech management so you can focus on what you do best – running your business.",
    features: [
      "Ongoing maintenance packages",
      "24/7 troubleshooting support",
      "System monitoring and alerts",
      "Regular security updates",
    ],
  },
  {
    icon: Code,
    title: "Digital Solutions Setup",
    description:
      "Establish your digital presence with the right foundation. From website creation to platform building, we ensure your technology tools align with your brand and business goals.",
    features: [
      "Professional website creation",
      "Platform development",
      "Branding-aligned tech tools",
      "E-commerce setup",
    ],
  },
];

const additionalServices = [
  {
    icon: Globe,
    title: "Global Payment Enablement",
    description:
      "Need to accept payments from clients worldwide? We can help you set up cross-border transaction capabilities seamlessly.",
  },
  {
    icon: LineChart,
    title: "Data Analytics Setup",
    description:
      "Make data-driven decisions with proper analytics infrastructure and reporting dashboards.",
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description:
      "Scale your operations with reliable, secure cloud infrastructure tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description:
      "Protect your digital assets with comprehensive security assessments and implementations.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              Our Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Comprehensive IT Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              From strategic consulting to hands-on implementation, we offer a full range of IT services designed to help your business thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass-card rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Additional Services"
            title="More Ways We Can Help"
            description="Beyond our core services, we offer specialized solutions to address specific business needs."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-16 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Book a free consultation and let us help you identify the best solutions for your business challenges.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
