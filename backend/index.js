const express = require('express')
const Database = require('./Database/Database')
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const router = require("./Router/Router")
app.use("/user", router)





app.listen(5151, () => {
    console.log("Server On")
})