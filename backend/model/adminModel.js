const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']

    }
},
{
    timestamps: true
})
module.exports = mongoose.model('Admin', adminSchema)