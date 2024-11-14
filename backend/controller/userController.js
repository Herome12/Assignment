const Readings = require("../models/userSchema");
const catchasynerror = require("../middleware/catchasyncerror")




exports.getReading = catchasynerror(async(req,res)=>{
  const {AirTemperature,processTemperature,RotationalSpeed,Torque}=req.body;

//   if (typeof AirTemperature !== 'number' || typeof ProcessTemperature !== 'number' ||
//     typeof RotationalSpeed !== 'number' || typeof Torque !== 'number') {
//   return res.status(400).json({ message: "Invalid input data" });
// }
  const reading = await Readings.create({
    AirTemperature,
    processTemperature,
    RotationalSpeed,
    Torque 
  })


  res.status(200).json({
    reading,
    message:"reading noted"
  })
})


exports.Reading = catchasynerror(async(req,res)=>{
  const reading = await Readings.find();
  res.status(200).json({
    reading,
    message:"All the Reading"
  })
})