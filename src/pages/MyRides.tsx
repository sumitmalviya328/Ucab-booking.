import { motion } from "framer-motion";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const rides = [
  { id: 1, from: "MG Road", to: "Koramangala", date: "Feb 28, 2026", fare: "₹185", status: "Completed" },
  { id: 2, from: "Whitefield", to: "Electronic City", date: "Feb 25, 2026", fare: "₹320", status: "Completed" },
  { id: 3, from: "Indiranagar", to: "Airport", date: "Feb 20, 2026", fare: "₹580", status: "Completed" },
];

export default function MyRides() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            My <span className="ucab-text-gradient">Rides</span>
          </h1>
          <p className="text-muted-foreground">Your ride history at a glance</p>
        </motion.div>

        <div className="space-y-4">
          {rides.map((ride, i) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-0.5 h-6 bg-border mx-auto" />
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">{ride.from}</div>
                  <div className="text-sm text-muted-foreground">{ride.to}</div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {ride.date}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-card-foreground">{ride.fare}</div>
                <div className="flex items-center gap-1 text-xs text-accent mt-1">
                  <CheckCircle className="w-3 h-3" /> {ride.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
