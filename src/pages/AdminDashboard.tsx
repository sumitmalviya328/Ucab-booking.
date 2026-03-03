import { motion } from "framer-motion";
import { Users, Car, MapPin, CreditCard, TrendingUp, BarChart3 } from "lucide-react";
import Footer from "@/components/Footer";

const stats = [
  { label: "Total Users", value: "12,450", icon: Users, change: "+8%" },
  { label: "Active Drivers", value: "3,200", icon: Car, change: "+12%" },
  { label: "Rides Today", value: "1,845", icon: MapPin, change: "+5%" },
  { label: "Revenue", value: "₹4.2L", icon: CreditCard, change: "+15%" },
];

const recentRides = [
  { id: "#R1234", user: "Ankit M.", driver: "Rajesh K.", fare: "₹185", status: "Completed" },
  { id: "#R1235", user: "Priya S.", driver: "Amit S.", fare: "₹320", status: "In Progress" },
  { id: "#R1236", user: "Rahul V.", driver: "Deepa N.", fare: "₹450", status: "Completed" },
  { id: "#R1237", user: "Neha G.", driver: "Vikram S.", fare: "₹210", status: "Cancelled" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl font-bold text-foreground">
            Admin <span className="ucab-text-gradient">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-1">Overview of your UCab operations</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl ucab-gold-gradient flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-xs font-medium text-accent flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Rides Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div className="p-5 border-b border-border flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-accent" />
            <h2 className="font-semibold text-card-foreground">Recent Rides</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Ride ID</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Driver</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Fare</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRides.map((ride) => (
                  <tr key={ride.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-card-foreground">{ride.id}</td>
                    <td className="p-4 text-sm text-card-foreground">{ride.user}</td>
                    <td className="p-4 text-sm text-card-foreground">{ride.driver}</td>
                    <td className="p-4 text-sm font-semibold text-card-foreground">{ride.fare}</td>
                    <td className="p-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        ride.status === "Completed" ? "bg-accent/10 text-accent" :
                        ride.status === "In Progress" ? "bg-primary/10 text-primary" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {ride.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
