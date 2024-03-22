const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`hahahahhahahah ${port}`)
})

const uri = 'mongodb+srv://anhnqph44183:UY3YlR0zLyKVyYbf@atlascluster.a1t1rzs.mongodb.net/md18305_lab3'

const mongoose = require('mongoose')

const carModel = require('./carModel')

const apiMobile = require('./api')
app.use('/api', apiMobile)

app.get('/', async (req, res) => {
    await mongoose.connect(uri)

    let cars = await carModel.find()

    console.log(cars)

    res.send(cars)
})