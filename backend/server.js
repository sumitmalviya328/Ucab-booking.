const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("UCab Backend Running");
});

// Register
app.post("/register", (req, res) => {
  console.log("Register data:", req.body);
  res.json({ message: "User Registered Successfully" });
});

// Login
app.post("/login", (req, res) => {
  console.log("Login data:", req.body);
  res.json({ message: "Login Success" });
});

// Book Ride
app.post("/bookride", (req, res) => {
  console.log("Ride data:", req.body);
  res.json({ message: "Ride Booked Successfully" });
});

// IMPORTANT: Render compatible port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});