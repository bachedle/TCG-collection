const express = require('express');
const router = express.Router();
const cardController = require('../../controller/card.controller');

router.get('/create', cardController.create);

module.exports = router;
