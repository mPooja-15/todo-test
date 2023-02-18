const express = require("express")
const Controller = require('../Controller/Controller')
const router = express.Router()

router.post("/create",Controller.CreateUser)
router.get("/find",Controller.GetUser)
router.get("/find/:id",Controller.GetByIDUser)
router.put("/update/:id",Controller.UpdateUser)
router.delete("/delete/:id",Controller.deleteUser)

module.exports = router