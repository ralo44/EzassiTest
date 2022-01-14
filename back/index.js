//config
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

//use config
app.use(express.json())
app.use(cors({origin: true}))
const port = process.env.port || 4201
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.listen(port, () =>{
    console.log(`Servidor corriendo en puerto ${port}`);
})
//routes to CRUD
app.use('/api/data', require('./routes/ezassiroutes'))

