import { useEffect, useState } from "react";

export default function MyRides() {

  const [rides, setRides] = useState<any[]>([]);

  useEffect(() => {

    const storedRides = JSON.parse(localStorage.getItem("rides") || "[]");

    setRides(storedRides);

  }, []);

  return (
    <div className="min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-6">
        My Ride History
      </h1>

      {rides.length === 0 ? (
        <p>No rides booked yet 🚕</p>
      ) : (
        rides.map((ride, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg mb-4 shadow"
          >
            <p><b>Pickup:</b> {ride.pickup}</p>
            <p><b>Drop:</b> {ride.drop}</p>
            <p><b>Date:</b> {ride.date}</p>
            <p><b>Time:</b> {ride.time}</p>
            <p><b>Cab:</b> {ride.cabType}</p>
            <p><b>Fare:</b> {ride.fare}</p>
          </div>
        ))
      )}

    </div>
  );
}