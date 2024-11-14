import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { register, load } from '../action/UserAction';
import './MaintenanceCheck.css';

const MaintenanceCheck = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    AirTemperature: '',
    processTemperature: '',
    RotationalSpeed: '',
    Torque: ''
  });

  const [maintenanceMessage, setMaintenanceMessage] = useState('');
  const [maintenanceClass, setMaintenanceClass] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle the form data submission
    const myForm = new FormData();
    myForm.set('AirTemperature', formData.AirTemperature);
    myForm.set('processTemperature', formData.processTemperature);
    myForm.set('RotationalSpeed', formData.RotationalSpeed);
    myForm.set('Torque', formData.Torque);

    console.log('registerForm Submitted');
    // Dispatch the form data using the register action
    dispatch(register(myForm));

    // Set thresholds for maintenance check
    const airTempThreshold = 50;
    const processTempThreshold = 100;
    const rotationalSpeedThreshold = 2000;
    const torqueThreshold = 500;

    // Check if any values exceed thresholds and display a maintenance message
    if (
      parseFloat(formData.AirTemperature) > airTempThreshold ||
      parseFloat(formData.processTemperature) > processTempThreshold ||
      parseFloat(formData.RotationalSpeed) > rotationalSpeedThreshold ||
      parseFloat(formData.Torque) > torqueThreshold
    ) {
      setMaintenanceMessage('Maintenance required');
      setMaintenanceClass('maintenance');
    } else {
      setMaintenanceMessage('No maintenance required');
      setMaintenanceClass('no-maintenance');
    }
  };

  return (
    <div className="maintenance-container">
      <h1 className="maintenance-header">Maintenance Check</h1>
      <form onSubmit={handleSubmit} className="maintenance-form">
        <div className="form-group">
          <label className="form-label">
            Air Temperature:
            <input
              type="number"
              name="AirTemperature"
              value={formData.AirTemperature}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Process Temperature:
            <input
              type="number"
              name="processTemperature"
              value={formData.processTemperature}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Rotational Speed:
            <input
              type="number"
              name="RotationalSpeed"
              value={formData.RotationalSpeed}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Torque:
            <input
              type="number"
              name="Torque"
              value={formData.Torque}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" className="submit-button">Check Maintenance</button>
      </form>
      <div>
        <h2 className={`maintenance-message ${maintenanceClass}`}>{maintenanceMessage}</h2>
      </div>
    </div>
  );
};

export default MaintenanceCheck;
