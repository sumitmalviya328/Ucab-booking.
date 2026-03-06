import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Car } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try{

      const response = await fetch("https://ucab-booking-1.onrender.com/login",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          email,
          password
        })

      });

      const data = await response.json();

      alert(data.message);

      if(data.message === "Login Success"){
        navigate("/bookride");
      }

    }catch(error){

      console.log(error);
      alert("Server connection error");

    }

  };

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

          <h1 className="text-2xl font-bold text-card-foreground">
            Welcome back
          </h1>

          <p className="text-sm text-muted-foreground mt-1">
            Sign in to your UCab account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="mt-1 bg-secondary"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label>Password</Label>

            <div className="relative mt-1">

              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-secondary pr-10"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
              </button>

            </div>

          </div>

          <Button variant="gold" className="w-full py-5">
            Sign in
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent hover:underline font-medium">
              Sign up
            </Link>
          </p>

        </form>
      </motion.div>
    </div>
  );
}