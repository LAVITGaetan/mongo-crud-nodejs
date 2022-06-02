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

// CORS POLICY
app.use(cors());

// Load assets
app.use(express.static(__dirname + '/assets'));

// DB Connection
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to DB');
});

// Import Route
const carsRoute = require('./routes/cars');

// Main Route
app.get('/', (req, res) => {
    res.send('Server is running');
})

// Client Route
app.get('/cars', services.show)

// API Route
app.use('/api/cars', carsRoute);


app.listen(PORT, () => { console.log(`Application is running on http://localhost:${PORT}`); })