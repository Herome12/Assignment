const express = require("express");
const router = express.Router()
const {getReading, Reading} = require("../controller/userController")


router.post("/reading",getReading);
router.get("/getReading",Reading)
  

module.exports = router;