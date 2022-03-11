const express = require('express')
const fs  = require('fs')
const path = require('path')
const http = require('http');
const port = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  //res.send('About Hello World!')
  res.sendFile(path.join(__dirname, 'index.html'))
  //res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})