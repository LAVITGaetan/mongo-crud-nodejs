const axios = require('axios');

// Render client view with all cars data
exports.show = (req, res) => {
    axios.get('http://localhost:4400/api/cars')
    .then(function(response) {
        res.render('index', {cars:response.data})
    })
    .catch(err => {
        res.send(err)
    })
}

// Render client view with single car data
exports.find = (req, res) => {
    axios.get(`http://localhost:4400/api/cars/${req.params.id}`)
    .then(function(response) {
        res.render('car', {car:response.data})
    })
    .catch(err => {
        res.send(err)
    })
}