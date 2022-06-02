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