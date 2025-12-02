import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Zap, Users, Building } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description: "We believe in transparent communication, making complex technology understandable and accessible.",
  },
  {
    icon: Heart,
    title: "Reliability",
    description: "We stand by our commitments, delivering consistent quality and dependable support.",
  },
  {
    icon: Target,
    title: "Problem-Solving",
    description: "We approach challenges with creativity and determination, finding solutions that truly work.",
  },
];

const audiences = [
  {
    icon: Building,
    title: "Startups",
    description: "We help early-stage companies build solid technical foundations and scale efficiently.",
  },
  {
    icon: Users,
    title: "SMEs",
    description: "We support small and medium enterprises in optimizing their digital operations.",
  },
  {
    icon: Target,
    title: "Personal Brands",
    description: "We assist entrepreneurs and creators in establishing their digital presence.",
  },
  {
    icon: Zap,
    title: "Creative Teams",
    description: "We empower agencies and creative studios with the right tools and infrastructure.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              About Paxwiix
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Your Technology Advisory Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Paxwiix is a technology advisory and IT consulting firm dedicated to helping businesses build, optimize, and scale their digital operations. We combine strategic thinking with hands-on expertise to deliver solutions that drive real results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that simplify operations, accelerate growth, and create lasting value. We strive to be more than consultants – we aim to be trusted partners in our clients' success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the go-to technology partner for ambitious businesses worldwide, known for our expertise, reliability, and commitment to client success. We envision a world where technology enables every business to reach its full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on Experience, Driven by Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Paxwiix was founded with a simple belief: every business deserves access to expert technology guidance, regardless of size. We saw too many companies struggling with digital transformation, held back by complexity and confusion.
                </p>
                <p>
                  Our team brings together years of experience across technology consulting, software development, and digital strategy. We have worked with startups, established businesses, and everything in between – learning what works and what does not.
                </p>
                <p>
                  Today, we channel that experience into practical, results-driven consulting that helps our clients navigate the digital landscape with confidence. We are not just advisors; we are partners invested in your success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "10+", label: "Years Combined Experience" },
                { value: "150+", label: "Projects Completed" },
                { value: "50+", label: "Satisfied Clients" },
                { value: "100%", label: "Commitment to Quality" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="font-heading text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Core Values"
            title="What We Stand For"
            description="Our values guide every decision we make and every interaction we have with our clients."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading
            badge="Who We Serve"
            title="Clients We Work With"
            description="We partner with a diverse range of clients, each with unique challenges and goals."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {audience.title}
                </h4>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let us discuss how Paxwiix can help your business achieve its digital goals.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
