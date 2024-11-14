const mongoose = require('mongoose');

// Define the user schema with a unique compound index
const userSchema = new mongoose.Schema({
  AirTemperature: {
    type: Number,
    required: [true, "Please enter air temperature"],
  },  
  processTemperature: {
    type: Number,
    required: [true, "Please enter process temperature"], 
  },
  RotationalSpeed: {
    type: Number,
    required: [true, "Please enter rotational speed"],
  },
  Torque: {
    type: Number,
    required: [true, "Please enter torque"],
  },
});

// Create a compound unique index on the combination of fields
userSchema.index({ AirTemprature: 1, processTemprature: 1, RotationalSpeed: 1, Torque: 1 }, { unique: true });

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
  