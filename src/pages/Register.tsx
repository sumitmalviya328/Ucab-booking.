import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Car } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen ucab-gradient flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl ucab-gold-gradient flex items-center justify-center mx-auto mb-4">
            <Car className="w-7 h-7 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-card-foreground">Create account</h1>
          <p className="text-sm text-muted-foreground mt-1">Join UCab today</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-card-foreground">Full Name</Label>
            <Input placeholder="John Doe" className="mt-1 bg-secondary" />
          </div>
          <div>
            <Label className="text-card-foreground">Email</Label>
            <Input type="email" placeholder="you@example.com" className="mt-1 bg-secondary" />
          </div>
          <div>
            <Label className="text-card-foreground">Phone</Label>
            <Input type="tel" placeholder="+91 98765 43210" className="mt-1 bg-secondary" />
          </div>
          <div>
            <Label className="text-card-foreground">Password</Label>
            <div className="relative mt-1">
              <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="bg-secondary pr-10" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <Button variant="gold" className="w-full py-5">Create Account</Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
