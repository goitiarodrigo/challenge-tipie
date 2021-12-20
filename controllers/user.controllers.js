const bcryptjs = require("bcryptjs")
const User = require("../models/User")
const Employee = require("../models/Employee")

const userControllers = {
    signIn: async (req, res) => {
        const {email, password} = req.body
        
        try {
            const userFound = await User.findOne({email})
            if (!userFound) throw new Error("❌ Password or Email incorrect")
            if (!bcryptjs.compareSync(password, userFound.password)) throw new Error("❌ Password or Email incorrect")
            res.json({success: true, response: userFound})
        }catch(error) {
            res.json({success: false, response: error.message})
        }
    },

    getEmployees: async (req, res) => {
        try {
            const allEmployees = await Employee.find()
            res.json({success: true, response: allEmployees})
        }catch(error) {
            res.json({success: false, response: error.message})
        }
    },

}

module.exports = userControllers