const express = require('express');
const router = express.Router();
const AuthService = require('../services/auth');

router.get('/jwt', async (req, res) => {
    try {
        const token = await AuthService.createJwtToken();
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
