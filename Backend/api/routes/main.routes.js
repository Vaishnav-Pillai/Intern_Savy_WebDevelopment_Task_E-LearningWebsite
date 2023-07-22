var express = require('express');
var router = express.Router();
const mainController = require('../controller/main.controller.js');

//HTTP Verbs : Post - Create, Get - Read, Put - Update, Delete

router.post('/users',mainController.create);

router.get('/users/:email',mainController.readOne);

module.exports = router;