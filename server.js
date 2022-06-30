const express = require("express")
const app = require("liquid-express-views")(express())

const port = 3000

/*
app.get('/', (req,res) =>{
    res.render('index', {fruits: fruits})
})


const fruits = require('./models/fruits.js')
*/
app.get('/', (req,res) =>{
    res.send(`<h1>Welcome to Gitpub App!`)
})



app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
})