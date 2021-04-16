const express = require('express')
const app  = express()

app.get('/list', (req,res) => {
  const {callback } = req.query
  const data = {
    name: '小王'
  }
  res.send(`${callback}(${JSON.stringify(data)})`)
})
app.listen(8001,_=>{
  console.log('ok')
})