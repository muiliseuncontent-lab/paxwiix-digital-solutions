import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Rocket,
  Building,
  CheckCircle,
  FileText,
  Zap,
  Server,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const solutions = [
  {
    icon: Package,
    title: "Starter Solutions",
    subtitle: "Perfect for New Businesses",
    description:
      "Get your digital foundation right from day one. Our starter package includes everything you need to establish a professional online presence.",
    features: [
      "Professional website setup",
      "Basic SEO configuration",
      "Email and communication tools",
      "Essential security measures",
      "Basic analytics setup",
    ],
    price: "Starting from £1,500",
  },
  {
    icon: Rocket,
    title: "Business Growth Tools",
    subtitle: "For Scaling Operations",
    description:
      "Ready to grow? Our business growth package provides the tools and infrastructure you need to scale efficiently without technical headaches.",
    features: [
      "Advanced web platform development",
      "CRM and automation integration",
      "Performance optimization",
      "Comprehensive analytics dashboard",
      "Priority technical support",
    ],
    price: "Starting from £4,500",
  },
  {
    icon: Building,
    title: "Digital Infrastructure Packages",
    subtitle: "Enterprise-Grade Solutions",
    description:
      "For businesses that need robust, scalable infrastructure. We design and implement enterprise-grade digital systems tailored to your needs.",
    features: [
      "Custom platform architecture",
      "Multi-system integration",
      "Advanced security implementation",
      "24/7 monitoring and support",
      "Dedicated account manager",
    ],
    price: "Custom pricing",
  },
];

const toolkits = [
  {
    icon: FileText,
    title: "Digital Strategy Templates",
    description:
      "Comprehensive documentation templates for planning your digital transformation. Includes roadmap frameworks, requirement documents, and project planning tools.",
  },
  {
    icon: Zap,
    title: "Automation Playbooks",
    description:
      "Step-by-step guides for implementing common automation workflows. Save time and reduce errors with our proven automation strategies.",
  },
  {
    icon: Server,
    title: "Tech Stack Guides",
    description:
      "Detailed guides to help you choose the right technologies for your business. Compare options and make informed decisions.",
  },
];

const benefits = [
  "Tailored to your specific business needs",
  "Scalable as your business grows",
  "Ongoing support and maintenance",
  "Clear pricing with no hidden costs",
  "Expert guidance throughout",
  "Modern, reliable technology stack",
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              Products & Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Ready-to-Deploy Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Accelerate your digital transformation with our pre-packaged solutions and consulting bundles designed for businesses at every stage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm text-primary font-medium mb-2">
                  {solution.subtitle}
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-lg font-semibold text-primary mb-4">{solution.price}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkits */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Resources"
            title="Digital Toolkits & Resources"
            description="Practical resources to help you plan and execute your digital initiatives."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {toolkits.map((toolkit, index) => (
              <motion.div
                key={toolkit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <toolkit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {toolkit.title}
                </h4>
                <p className="text-muted-foreground text-sm">{toolkit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Why Our Solutions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Your Success
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every solution we offer is designed with your business goals in mind. We do not believe in one-size-fits-all – we create packages that adapt to your unique needs and grow with you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every business is unique. If our standard packages do not quite fit your needs, let us design a custom solution tailored specifically for you.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/contact">
                  Discuss Custom Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let us help you choose the right solution for your needs and get started on your digital journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
