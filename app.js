const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: 'config.env'})
connectToMongo();
const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// Listening Port
app.listen(PORT, () => {
  console.log(`iNotebook backend listening at https://localhost:${PORT}`)
})