const express = require('express');
const router = express.Router();
const controller = require('../controllers/carController')

// Get all cars
router.get('/', controller.show)

// Get a single car
router.get('/:carId', controller.find)

// Create a new car
router.post('/', controller.create)

// Update a single car
router.patch('/:carId', controller.update)

// Delete a single car
router.delete('/:carId', controller.delete)

module.exports = router;