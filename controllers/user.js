const express = require('express');
const router = express.Router();
const UserSerices = require('../services/user')
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware)

router.post('/user', async (req, res) => {
    try {
        const { username, accountNumber, emailAddress, identityNumber } = req.body;
        const user = await UserSerices.createUser(username, accountNumber, emailAddress, identityNumber);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserSerices.getById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const newData = req.body;
        const updatedUser = await UserSerices.updateUser(userId, newData);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await UserSerices.deleteUser(userId);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
