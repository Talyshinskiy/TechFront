require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongose = require('mongoose')
const routers = require('./router/index')


const PORT = process.env.PORT || 4001
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', routers)

const start = async () => {
  try {
    await mongose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`Server started in port = ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()