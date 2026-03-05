const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("UCab Backend Running");
});

app.post("/register", (req, res) => {
  console.log("Register data:", req.body);
  res.send({ message: "User Registered" });
});

app.post("/login", (req, res) => {
  console.log("Login data:", req.body);
  res.send({ message: "Login Success" });
});

app.post("/bookride", (req, res) => {
  console.log("Ride data:", req.body);
  res.send({ message: "Ride Booked" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});