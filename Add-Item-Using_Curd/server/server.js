const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Enable CORS for frontend communication
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // Frontend URL (can be changed in .env)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials (cookies, authorization headers)
};
app.use(cors(corsOptions));

// Connect to database with error handling
connectDB()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection failed', err);
    process.exit(1); // Exit the process if database connection fails
  });

// Middleware
app.use(express.json()); // Parse incoming JSON data

// Serve static files (images) from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// Error handling for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the stack trace for debugging
  res.status(500).json({ message: 'Internal Server Error' });
});

// Set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
