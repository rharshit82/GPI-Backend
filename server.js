const express = require('express')
const app = express()
const PORT = process.env.PORT
const data = require('./data')

app.use(express.json());

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(PORT || 80, () => {
  console.log(`App running on ${PORT || 80}`)
})