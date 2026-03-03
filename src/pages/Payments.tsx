import { motion } from "framer-motion";
import { CreditCard, Smartphone, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const methods = [
  { id: "upi", name: "UPI", icon: Smartphone, desc: "Pay via Google Pay, PhonePe, etc." },
  { id: "card", name: "Card", icon: CreditCard, desc: "Debit / Credit card payment" },
  { id: "wallet", name: "Wallet", icon: Wallet, desc: "UCab wallet balance" },
];

export default function Payments() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            <span className="ucab-text-gradient">Payments</span>
          </h1>
          <p className="text-muted-foreground">Secure and simple payment options</p>
        </motion.div>

        <div className="space-y-4 mb-8">
          {methods.map((method, i) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-xl ucab-gold-gradient flex items-center justify-center">
                <method.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h3 className="font-semibold text-card-foreground mb-4">Recent Transaction</h3>
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-muted-foreground">MG Road → Koramangala</span>
            <span className="font-semibold text-card-foreground">₹185</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-muted-foreground">Whitefield → Electronic City</span>
            <span className="font-semibold text-card-foreground">₹320</span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
