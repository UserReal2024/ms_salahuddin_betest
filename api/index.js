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

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app