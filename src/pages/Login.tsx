import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Car } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
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
          <h1 className="text-2xl font-bold text-card-foreground">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your UCab account</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="text-card-foreground">Email</Label>
            <Input type="email" placeholder="you@example.com" className="mt-1 bg-secondary" />
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
          <Button variant="gold" className="w-full py-5">Sign in</Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-card px-2 text-muted-foreground">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="text-card-foreground">Google</Button>
            <Button variant="outline" className="text-card-foreground">Apple</Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent hover:underline font-medium">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
