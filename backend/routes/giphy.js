const express = require('express');
const router = express.Router();

const { trending, search } = require('../controllers/giphy-controller');

router.get('/trending', trending);
router.get('/search', search)

module.exports = router;