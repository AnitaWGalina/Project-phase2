import React, { useState } from "react";
//import "./FormData.css";

const FormData = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [dailyMovement, setDailyMovement] = useState("");
  const [healthIssues, setHealthIssues] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use this data to make API calls or perform calculations
    const formData = {
      name,
      weight,
      dob,
      height,
      gender,
      currentWeight,
      targetWeight,
      dailyMovement,
      healthIssues
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="current-weight">Current Weight (kg):</label>
        <input
          type="number"
          id="current-weight"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="target-weight">Target Weight (kg):</label>
        <input
          type="number"
          id="target-weight"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="daily-movement">Daily Movement:</label>
        <textarea
          id="daily-movement"
          value={dailyMovement}
          onChange={(e) => setDailyMovement(e.target.value)}
        />
      </div>


      <div>
        <label htmlFor="health-issues">Health Issues:</label>
        <textarea
          id="health-issues"
          value={healthIssues}
          onChange={(e) => setHealthIssues(e.target.value)}
        />
      </div>
      </form> 
  )};
  export default FormData;
