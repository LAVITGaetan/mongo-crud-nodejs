const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const services = require('./services/render');

const app = express();

// Getting PORT variable
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080;

// Log request 
app.use(morgan('tiny'));

app.use(bodyparser.json());

// Set view engine
app.set("view engine", "ejs");

// Cross origin
app.use(cors());

// Load assets
app.use(express.static(__dirname + '/assets'));

// DB
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to DB');
});

// Import Route
const carsRoute = require('./routes/cars');
const res = require('express/lib/response');

// Routes
app.get('/', (req, res) => {
    res.send('Server is running');
})

// Car client route
app.get('/cars', services.show)

// Car API Route
app.use('/api/cars', carsRoute);

app.listen(PORT, () => { console.log(`Application is running on http://localhost:${PORT}`); })