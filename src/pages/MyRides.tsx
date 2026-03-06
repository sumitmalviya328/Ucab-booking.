import { useEffect, useState } from "react";

export default function MyRides() {

  const [rides, setRides] = useState([]);

  useEffect(() => {
    const storedRides = JSON.parse(localStorage.getItem("rides") || "[]");
    setRides(storedRides);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          My Ride History
        </h1>

        {rides.length === 0 ? (
          <p className="text-gray-600">No rides booked yet 🚕</p>
        ) : (
          rides.map((ride, index) => (
            <div
              key={index}
              className="bg-white border p-5 rounded-lg mb-4 shadow-sm"
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

    </div>
  );
}