const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController'); 
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/signup', (req, res) => UserController.signup(req, res));

router.post('/login', (req, res) => UserController.login(req, res));

router.post('/logout', (req, res) => UserController.logout(req, res));

router.get('/user', authMiddleware, (req, res) => UserController.getUser(req, res));



module.exports = router;
