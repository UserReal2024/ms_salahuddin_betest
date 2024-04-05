const redis = require('redis');
const redisClient = redis.createClient();

class RedisUtils {
    static async set(key, value, expiresIn = 3600) {
        return new Promise((resolve, reject) => {
            redisClient.setex(key, expiresIn, value, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async get(key) {
        return new Promise((resolve, reject) => {
            redisClient.get(key, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = RedisUtils;
