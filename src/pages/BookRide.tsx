import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Clock, Car, Loader2 } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const cabTypes = [
  { id: "mini", name: "Mini", price: "₹8/km", icon: "🚗" },
  { id: "sedan", name: "Sedan", price: "₹12/km", icon: "🚙" },
  { id: "suv", name: "SUV", price: "₹16/km", icon: "🚐" },
  { id: "premium", name: "Premium", price: "₹22/km", icon: "✨" },
];

export default function BookRide() {

  const navigate = useNavigate();

  const [selectedCab, setSelectedCab] = useState("sedan");
  const [loading, setLoading] = useState(false);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const estimatedFare =
    selectedCab === "mini"
      ? "₹120–150"
      : selectedCab === "sedan"
      ? "₹180–220"
      : selectedCab === "suv"
      ? "₹250–300"
      : "₹350–420";

  const handleBook = () => {

    if (!pickup || !drop || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const ride = {
      pickup,
      drop,
      cabType: selectedCab,
      fare: estimatedFare,
      date,
      time
    };

    const rides = JSON.parse(localStorage.getItem("rides") || "[]");

    rides.push(ride);

    localStorage.setItem("rides", JSON.stringify(rides));

    setTimeout(() => {
      setLoading(false);
      alert("Ride Booked Successfully 🚕");

      // correct route
      navigate("/my-rides");

    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background pt-20">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Book Your <span className="ucab-text-gradient">Ride</span>
          </h1>

          <p className="text-muted-foreground">
            Fast, safe, and affordable rides at your fingertips
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <div>
                <Label className="mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  Pickup Location
                </Label>

                <Input
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>

              <div>
                <Label className="mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-destructive" />
                  Drop Location
                </Label>

                <Input
                  placeholder="Enter drop address"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <Label className="mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    Date
                  </Label>

                  <Input
                    type="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                  />
                </div>

                <div>
                  <Label className="mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Time
                  </Label>

                  <Input
                    type="time"
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}
                  />
                </div>

              </div>

            </div>

            <div className="space-y-4">

              <Label className="flex items-center gap-2">
                <Car className="w-4 h-4 text-accent" />
                Select Cab Type
              </Label>

              <div className="grid grid-cols-2 gap-3">

                {cabTypes.map((cab) => (
                  <button
                    key={cab.id}
                    onClick={() => setSelectedCab(cab.id)}
                    className={`p-4 rounded-xl border-2 ${
                      selectedCab === cab.id
                        ? "border-accent bg-accent/10"
                        : "border-border"
                    }`}
                  >
                    <div className="text-2xl">{cab.icon}</div>
                    <div className="font-semibold text-sm">{cab.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {cab.price}
                    </div>
                  </button>
                ))}

              </div>

              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="text-sm text-muted-foreground">
                  Estimated Fare
                </div>
                <div className="text-2xl font-bold ucab-text-gradient">
                  {estimatedFare}
                </div>
              </div>

            </div>

          </div>

          <Button
            variant="gold"
            size="lg"
            className="w-full mt-6 py-6"
            onClick={handleBook}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Finding your driver...
              </>
            ) : (
              "Book Ride"
            )}
          </Button>

        </motion.div>

      </div>

      <Footer />

    </div>
  );
}