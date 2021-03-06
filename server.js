const express = require("express")
const app = require("liquid-express-views")(express())

const port = 3000

const drinks = require('./models/drinks.js')
/*
app.get('/', (req,res) =>{
    res.render('index', {fruits: fruits})
})


const fruits = require('./models/fruits.js')
*/

//home route
app.get('/', (req,res) =>{
    res.send(`<body style="background-color: steelblue">
            <h1>Welcome to Gitpub App! </h1>
            <a href="/drinks">view drinks</a>`)
})

//index route
app.get('/drinks', (req,res) =>{
    res.render('index', {drinks: drinks})
})

//show route
app.get('/drinks/:drinkIndex', (req,res) =>{
    //console.log(req.params.drinkIndex)
    res.render('show', {drink: drinks[req.params.drinkIndex]
                        })
})

app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
})