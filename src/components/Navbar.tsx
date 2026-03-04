import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Book Ride", to: "/book" },
  { label: "Drivers", to: "/drivers" },
  { label: "My Rides", to: "/my-rides" },
  { label: "Payments", to: "/payments" },
  { label: "Admin", to: "/admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ucab-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg ucab-gold-gradient flex items-center justify-center">
              <Car className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold ucab-text-gradient">UCab</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                  location.pathname === link.to
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-yellow-300 transition"
              >
                Log in
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="gold" size="sm">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden ucab-glass border-t border-border/20"
          >
            <div className="px-4 py-4 space-y-2">

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
                    location.pathname === link.to
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-gray-300 hover:text-yellow-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 flex gap-3">
                <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Log in
                  </Button>
                </Link>

                <Link to="/register" className="flex-1" onClick={() => setOpen(false)}>
                  <Button variant="gold" size="sm" className="w-full">
                    Sign up
                  </Button>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}