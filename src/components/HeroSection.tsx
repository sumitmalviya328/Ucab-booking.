import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center ucab-gradient overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Trusted by 1M+ riders
              </span>
            </div>
          </motion.div>

          {/* Background Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl font-extrabold text-blue-200 pointer-events-none select-none"
          >
            Ride Smart, Ride Safe
          </motion.h1>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="ucab-text-gradient">
              with UCab
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Premium cab service with real-time tracking, verified drivers,
            and secure payments. Your journey, elevated.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/book">
              <Button
                variant="gold"
                size="lg"
                className="text-base px-8 py-6 animate-pulse-gold"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Button
              variant="gold-outline"
              size="lg"
              className="text-base px-8 py-6"
            >
              Learn More
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}