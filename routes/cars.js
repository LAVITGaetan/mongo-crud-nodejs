const express = require('express');
const router = express.Router();
const controller = require('../controllers/carController')

router.get('/', controller.show)

router.get('/:carId', controller.find)

router.post('/', controller.create)

router.patch('/:carId', controller.update)

router.delete('/:carId', controller.delete)

module.exports = router;