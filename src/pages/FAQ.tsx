import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How does the consultation process work?",
        answer:
          "Our consultation process begins with an initial discovery call where we learn about your business, challenges, and goals. We then provide a detailed proposal outlining our recommended approach, timeline, and investment. Once approved, we kick off the project with a comprehensive onboarding session to ensure alignment and set clear expectations.",
      },
      {
        question: "What information do I need to provide before our first meeting?",
        answer:
          "To make the most of our initial consultation, it helps to have a clear understanding of your current challenges, business objectives, and any existing technology infrastructure. However, do not worry if you are not sure – we are skilled at asking the right questions to uncover what you need.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "For most projects, we can begin within one to two weeks of signing an agreement. For urgent needs, we offer expedited onboarding options. The exact timeline depends on project scope and our current availability.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "How is your pricing structured?",
        answer:
          "We offer flexible pricing models depending on the nature of your project. This includes fixed-price packages for defined deliverables, retainer arrangements for ongoing support, and hourly consulting for ad-hoc needs. We always provide clear, detailed quotes upfront with no hidden costs.",
      },
      {
        question: "What technologies and platforms do you work with?",
        answer:
          "We are technology-agnostic and work with a wide range of platforms and tools. Our expertise spans web technologies (React, Node.js, Python), cloud platforms (AWS, Google Cloud, Azure), e-commerce solutions (Shopify, WooCommerce), CRM systems, and various automation tools. We recommend the best fit for your specific needs.",
      },
      {
        question: "Do you offer ongoing support after project completion?",
        answer:
          "Yes, we offer comprehensive support packages to ensure your digital solutions continue to perform optimally. This includes regular maintenance, security updates, performance monitoring, and priority access to our support team. Support plans can be tailored to your specific requirements.",
      },
    ],
  },
  {
    category: "Project Timeline",
    questions: [
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary significantly based on scope and complexity. A simple website might take two to four weeks, while a comprehensive digital transformation project could span several months. We provide detailed timelines during the proposal phase and keep you updated throughout.",
      },
      {
        question: "What is your process for handling changes during a project?",
        answer:
          "We understand that requirements can evolve. We use an agile approach that accommodates reasonable changes while maintaining project momentum. Any significant scope changes are documented, and we discuss their impact on timeline and budget before proceeding.",
      },
      {
        question: "How do you communicate project progress?",
        answer:
          "We believe in transparent, regular communication. You will receive weekly progress updates, have access to project management tools, and can schedule check-in calls as needed. We assign a dedicated project manager to be your main point of contact throughout.",
      },
    ],
  },
  {
    category: "Working Together",
    questions: [
      {
        question: "Do you work with clients outside the UK?",
        answer:
          "Absolutely. We work with clients globally and have experience managing remote projects across different time zones. Video conferencing, collaborative tools, and flexible scheduling make international collaboration seamless.",
      },
      {
        question: "Can you work with our existing IT team?",
        answer:
          "Yes, we frequently collaborate with in-house teams. Whether you need us to lead a project, provide specialist expertise, or offer strategic guidance to your team, we adapt our approach to complement your existing resources.",
      },
      {
        question: "What makes Paxwiix different from other IT consultancies?",
        answer:
          "We combine deep technical expertise with a genuine commitment to your business success. We do not just deliver projects – we build partnerships. Our approach is practical and results-focused, without unnecessary jargon or complexity. We are invested in seeing you succeed.",
      },
    ],
  },
];

const FAQ = () => {
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
              FAQ
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Find answers to common questions about our services, process, and how we work with clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="glass-card rounded-xl px-6 border-border data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are here to help. Reach out to our team and we will be happy to answer any questions you may have.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
