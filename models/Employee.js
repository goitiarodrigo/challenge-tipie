const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: String,
    age: String,
    sector: String,
    email: String
})

const Employee = mongoose.model("employee", EmployeeSchema)

module.exports = Employee