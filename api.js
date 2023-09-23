const express = require('express');
const randomFacts = require('./Randoms/facts');
const randomJokes = require('./Randoms/jokes');

const app = express()

// app.use(express.json())

app.use('/', require('./routes'))

app.listen(4000, (req,res)=>{
    console.log("Server is running in the port 4040")
})