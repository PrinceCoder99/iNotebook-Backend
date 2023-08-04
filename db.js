const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: 'config.env'})

const mongoURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('MongoDB connected Successfully!')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB