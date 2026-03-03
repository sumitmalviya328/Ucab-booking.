import { motion } from "framer-motion";
import { MapPin, Shield, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your ride live on the map. Know exactly where your driver is at all times.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-grade encryption. UPI, cards, and wallets.",
  },
  {
    icon: Shield,
    title: "Verified Drivers",
    description: "Every driver is background-checked and rated. Your safety is our top priority.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support. We're always here when you need us.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="ucab-text-gradient">UCab</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built for riders who expect the best. Every feature designed for your comfort and safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-border bg-card ucab-card-hover group"
            >
              <div className="w-12 h-12 rounded-xl ucab-gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
