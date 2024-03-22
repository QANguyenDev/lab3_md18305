const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    await mongoose.connect(uri)

    let cars = await carModel.find()

    console.log(cars)

    res.send(cars)
})

module.exports = router