const Car = require('../models/Car');

// Get all cars
exports.show = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars)
    }
    catch (err) {
        res.json({ message: err })
    }
}

// Get a single car
exports.find = async (req, res) => {
    if (!req.params.carId) return res.send('Id parameter must be provided')
    try {
        const car = await Car.findById(req.params.carId)
        res.json(car)
    } catch (err) {
        res.json({message:err})
    }
}

// Add a new car
exports.create = async (req, res) => {
    if (!req.body.label) return res.send('Label field must be completed')
    if (!req.body.marque) return res.send('Marque field must be completed')
    if (!req.body.kilometers) return res.send('Kilometers field must be completed')
    const car = new Car({
        label: req.body.label,
        marque: req.body.marque,
        kilometers: req.body.kilometers
    })
    try {
        const savedCar = await car.save();
        res.send(car);
    } catch (err) {
        res.json({ message: err })
    }   
}

// Update a car
exports.update = async (req, res) => {
    if(!req.body.label) return res.send('Label field must be completed')
    if (!req.body.marque) return res.send('Marque field must be completed')
    if (!req.body.kilometers) return res.send('Kilometers field must be completed')
    try {
        const updatedCar = await Car.updateOne({_id: req.params.carId}, {$set : {label: req.body.label, kilometers: req.body.kilometers}})
        res.json(updatedCar)
    }catch(err) {
        res.json({message : err})
    }
}

// Delete a car
exports.delete = async (req, res) => {
    try {
        const removedCar = await Car.deleteOne({_id: req.params.carId })
        res.json(removedCar);
    }catch(err) {
        res.json({message: err});
    }
}