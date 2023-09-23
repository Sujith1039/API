const express = require('express');
const router = express.Router();
const randomFacts = require('./Randoms/facts');
const randomJokes = require('./Randoms/jokes');


router.get('/',(req,res)=>{
    res.send({
        message:"You've Successfully Connected With The API"
    })
    })

router.get('/facts/:id',(req,res)=>{
    const { id } = req.params
    const num = id-1;
    if(id){
        res.send(randomFacts[num])
    }
})

router.get('/facts/',(req,res)=>{

    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    const randomFact = randomFacts[randomIndex];
    res.json(randomFact)
    
})

router.get('/jokes/:id',(req,res)=>{
    const { id } = req.params
    const num = id-1;
    if(id){
        res.send(randomJokes[num])
    }
})

router.get('/jokes/',(req,res)=>{

    const randomIndex = Math.floor(Math.random() * randomJokes.length);
    const randomJoke = randomJokes[randomIndex];
    res.json(randomJoke)
    
})

router.get('/developer', (req,res)=>{
    res.send('Sujith S developed this api on Sep 23 2023. Cheers 🥂')
})

module.exports = router;

 