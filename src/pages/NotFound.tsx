import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="font-heading text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/contact">
                  <ArrowLeft className="w-4 h-4" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
