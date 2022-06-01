exports.show = (req, res) => {
    const api = 'http://localhost:4400/api/cars';
    res.render('index', {api_uri: api})
}