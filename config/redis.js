const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', () => {
    console.log('Redis connected');
});

redisClient.on('error', (error) => {
    console.error('Redis connection failed:', error.message);
});

module.exports = redisClient;
