// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const eventRoutes = require('./routes/events'); // Import the event routes


// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(express.json());


// const corsOptions = {
//   origin: "http://localhost:3000", // Frontend URL
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOptions)); // Add CORS with options

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected'))  // Log success
//   .catch(err => {
//     console.error('MongoDB connection error:', err);  // Log error if connection fails
//     res.status(500).json({ error: 'Error connecting to MongoDB' });  // Return error if connection fails
//   });

// app.get("/api/test", (req, res) => {
//   console.log("API test route hit!");  // Debugging log
//   res.json({ message: "Welcome to the Bridge Family" });
// });

// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// app.get("/api/events", async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching events" });
//   }
// });


// const path = require("path");

// app.use(express.static(path.join(__dirname, "frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
// });

// app.use('/api/events', eventRoutes); // Use the event route

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Welcome to the Bridge Family" });
});

// ✅ Events Route
// Sample /api/events route
app.get("/api/events", (req, res) => {
  res.json([
    { id: 1, name: "Sample Event 1", date: "2025-02-25T12:00:00Z", description: "This is a sample event" },
    { id: 2, name: "Sample Event 2", date: "2025-03-10T13:00:00Z", description: "This is another event" }
  ]);
});

// Main route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
