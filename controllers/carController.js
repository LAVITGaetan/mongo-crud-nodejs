const Car = require('../models/Car');

exports.show = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars)
    }
    catch (err) {
        res.json({ message: err })
    }
}

exports.find = async (req, res) => {
    if (!req.params.carId) return res.send('Id parameter must be provided')
    try {
        const car = await Car.findById(req.params.carId)
        res.json(car)
    } catch (err) {
        res.json({message:err})
    }
}

exports.create = async (req, res) => {
    if (!req.body.label) return res.send('Label field must be completed')
    const car = new Car({
        label: req.body.label
    })
    try {
        const savedCar = await car.save();
        res.send(car);
    } catch (err) {
        res.json({ message: err })
    }   
}

exports.update = async (req, res) => {
    if(!req.body.label) return res.send('Label field must be completed')
    try {
        const updatedCar = await Car.updateOne({_id: req.params.carId}, {$set : {label: req.body.label}})
        res.json(updatedCar)
    }catch(err) {
        res.json({message : err})
    }
}

exports.delete = async (req, res) => {
    try {
        const removedCar = await Car.deleteOne({_id: req.params.carId })
        res.json(removedCar);
    }catch(err) {
        res.json({message: err});
    }
}