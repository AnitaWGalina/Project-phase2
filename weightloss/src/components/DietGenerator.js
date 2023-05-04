import React from "react";

function DietGenerator({ user, dietData }) {
  console.log(dietData);
  console.log(user);
  return (
    <div>
      {dietData.dailyPlan?.map((plan, index) => {
        <span>`Day ${index + 1}:`</span>;
        for (const meal of plan.meals) {
          <p>` For meal ${meal.type} you should eat:`;</p>;
          for (const ingredient of meal.ingredients) {
            <p>
              ` ${ingredient.quantity} grams of ${ingredient.name}`
            </p>;
          }
          console.log("");
        }
      })}
    </div>
  );
}

export default DietGenerator;
