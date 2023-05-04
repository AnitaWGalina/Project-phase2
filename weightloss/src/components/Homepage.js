import React from "react";
import { useCallback, useEffect, useState } from "react";
import DietGenerator from "./DietGenerator";

function Homepage() {
  const [user, setuser] = useState([]);
  const [dietData, setDietData] = useState([]);
  const url = "https://bespoke-diet-generator.p.rapidapi.com/user";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "e49c3064cdmsh06f603b55295383p195ceajsnd60e8b6c0541",

      "X-RapidAPI-Host": "bespoke-diet-generator.p.rapidapi.com",
    },
    body: JSON.stringify({
      height: 184,
      weight: 87,
      dateOfBirth: "1991-03-03",
      sex: "MALE",
      activityLevel: "VERY_ACTIVE",
    }),
  };
  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("error!");
      }

      const result = await response.json();
      setuser(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setUserDiet = useCallback(async (userId) => {
    const url = `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/diet`;
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "Accept-Language": "en",
        "X-RapidAPI-Key": "fa2176ba5fmshb9675f0083bd93fp11b16ajsn51717dba6d59",
        "X-RapidAPI-Host": "bespoke-diet-generator.p.rapidapi.com",
      },
      body: JSON.stringify({
        dietType: "LOW_CARB",
        weightGoal: 60,
        dietDuration: 7,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setDietData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    //fetchUserData();
    //setUserDiet("WMvivXOyvvDLxcrrTXy1v");
  }, [fetchUserData, setUserDiet]);
  return (
    <div>
      <DietGenerator user={user} dietData={dietData} />
    </div>
  );
}

export default Homepage;
