const express = require('express');
const connectDB = require('./config/mongo');
const authControllers = require('./controllers/auth');
const userControllers = require('./controllers/user');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authControllers);
app.use('/api', userControllers);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
