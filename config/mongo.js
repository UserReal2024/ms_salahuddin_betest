const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const pass = process.env.MONGGOPASS
        await mongoose.connect(`mongodb+srv://datafa2023:${pass}@cluster0.5cgbqj3.mongodb.net/db_salahuddin_betest?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB
