require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        ststus: 200,
        msg: 'Default route'
    })
})

app.get("port", PORT)
app.listen(app.get('port'), () => 
    console.log(`PORT: ${app.get("port")}`)
)