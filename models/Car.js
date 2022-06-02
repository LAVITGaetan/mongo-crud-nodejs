const mongoose = require('mongoose');

// Car table
const CarSchema = mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    marque: {
        type: String,
        required: true,
    },
    kilometers: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default : true
    },
    created_at: {
        type: Date,
        required: true,
        default : Date.now
    }
})

module.exports = mongoose.model('Cars', CarSchema);