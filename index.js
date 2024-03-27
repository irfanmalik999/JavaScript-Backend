require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Irfan Backend using express')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login on my first Backend App</h1>')
})

app.get('/app.getData', (req, res) => {
    res.send('<h2> app.get ka kaam hai HTTP GET requests ko handle karna. Jab koi user apne browser mein kisi URL ko type karta hai ya kisi link par click karta hai, tab browser us URL ka GET request server ki taraf bhejta hai. app.get function ka upyog yeh karne ke liye hota hai ki jab server ko koi GET request milta hai, to wo us request ka URL check karta hai aur us URL ke according sahi response ko bhejta hai. Ismein, app.get ke through hum URL paths aur unke corresponding handlers define karte hain, jo ki user ko response mein data provide karte hain.</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})