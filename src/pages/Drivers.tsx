import { motion } from "framer-motion";
import { Star, Shield, Car } from "lucide-react";
import Footer from "@/components/Footer";

const drivers = [
  { name: "Rajesh Kumar", rating: 4.9, trips: 3200, verified: true, car: "Swift Dzire" },
  { name: "Amit Sharma", rating: 4.8, trips: 2800, verified: true, car: "Honda City" },
  { name: "Priya Patel", rating: 4.9, trips: 1500, verified: true, car: "Hyundai Creta" },
  { name: "Suresh Yadav", rating: 4.7, trips: 4100, verified: true, car: "Maruti Ertiga" },
  { name: "Deepa Nair", rating: 4.8, trips: 2100, verified: true, car: "Toyota Innova" },
  { name: "Vikram Singh", rating: 4.6, trips: 3700, verified: true, car: "Hyundai Verna" },
];

export default function Drivers() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Our <span className="ucab-text-gradient">Drivers</span>
          </h1>
          <p className="text-muted-foreground">Verified, experienced, and ready to serve you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, i) => (
            <motion.div
              key={driver.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 ucab-card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full ucab-gradient flex items-center justify-center text-xl font-bold text-accent">
                  {driver.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{driver.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Car className="w-3 h-3" /> {driver.car}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="font-semibold text-card-foreground">{driver.rating}</span>
                  <span className="text-xs text-muted-foreground">({driver.trips} trips)</span>
                </div>
                {driver.verified && (
                  <div className="flex items-center gap-1 text-xs text-accent">
                    <Shield className="w-3 h-3" /> Verified
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
