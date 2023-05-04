import React, { useState } from "react";

const FormData = () => {
const [name, setName] = useState("");
const [dob, setDob] = useState("");
const [height, setHeight] = useState("");
// const [sex, setSex] = useState("");
// const [weight, setWeight] = useState("");
// const [currentWeight, setCurrentWeight] = useState("");
// const [targetWeight, setTargetWeight] = useState("");
const [activityLevel, setActivityLevel] = useState("");
// const [healthIssues, setHealthIssues] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
// You can use this data to make API calls or perform calculations
const formData = {
name,
weight,
dob,
height,
sex,
// currentWeight,
// targetWeight,
activityLevel,
//healthIssues
};

console.log(formData);
};

return (
<form onSubmit={handleSubmit}>
<div>
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
<div>
<label htmlFor="dob">Date of Birth:</label>
<input
type="date"
id="dob"
value={dob}
onChange={(e) => setDob(e.target.value)}
/>
</div>

<div>
<label htmlFor="height">Height (cm):</label>
<input
type="number"
id="height"
value={height}
onChange={(e) => setHeight(e.target.value)}
/>
</div>

<div>
<label htmlFor="sex">Sex:</label>
<select
id="sex"
value={sex}
onChange={(e) => setSex(e.target.value)}
>
<option value="select">select</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>

{/* <div>
<label htmlFor="current-weight">Current Weight (kg):</label>
<input
type="number"
id="current-weight"
value={currentWeight}
onChange={(e) => setCurrentWeight(e.target.value)}
/>
</div>

<div>
<label htmlFor="target-weight">Target Weight (kg):</label>
<input
type="number"
id="target-weight"
value={targetWeight}
onChange={(e) => setTargetWeight(e.target.value)}
/>
</div> */}

<div>
<label htmlFor="activityLevel">Activity Level:</label>
<select
id="activity-level"
value={activityLevel}
onChange={(e) => setActivityLevel(e.target.value)}
>
<option value="select">select</option>
<option value="MOSTLY_SEDENTARY">MOSTLY_SEDENTARY</option>
<option value="SOMEWHAT_SEDENTARY">SOMEWHAT_SEDENTARY</option>
<option value="SOMEWHAT_ACTIVE">SOMEWHAT_ACTIVE</option>
<option value="MODERATELY_ACTIVE">MODERATELY_ACTIVE</option>
<option value="VERY_ACTIVE">VERY_ACTIVE</option>
</select>
</div>

{/* <div>
<label htmlFor="health-issues">Health Issues:</label>
<textarea
id="health-issues"
value={healthIssues}
onChange={(e) => setHealthIssues(e.target.value)}
/>
</div> */}
</form>
)};
export default FormData;