const express = require("express")
const cors = require("cors")
require("dotenv").config()
require("./configs/database")
const app = express()
const morgan = require("morgan")
const router = require("./routes")

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/api", router)

app.listen(4000, ()=> console.log("Server is on"))
