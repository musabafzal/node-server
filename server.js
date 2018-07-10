const express = require('express')
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 8080

var app = express()

hbs.registerPartials(path.join(__dirname, 'views/partials/'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public/')))

app.use((req, res, next) => {
  // res.render('maintainence.hbs')
  next()
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMsg: 'Whats up dawg'
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
