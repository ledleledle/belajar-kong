const express = require('express')
const server = express()
const port = 3000
 
server.get('/one', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v1') 
})

server.get('/two', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v2')
})

server.get('/three', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API V3')
})
 
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})
