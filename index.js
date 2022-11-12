const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('we streaming')
})

let port = 8000

app.listen(port, () =>{
    console.log(`we up on port ${port}`)
})

