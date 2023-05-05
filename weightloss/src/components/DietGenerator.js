import React from "react";

// import ReactDOM from "react-dom";

function DietGenerator({ dietData }) {
  console.log(dietData);
  return (
    <div>
      {dietData.dailyPlan?.map((plan, index) => {
        return (
          <div key={index}>
            <span>Day {index + 1}:</span>
            <div>
              {plan.meals?.map((meal) => (
                <div key={meal.type}>
                  <p>For meal {meal.type} you should eat:</p>
                  {meal.ingredients.map((ingredient) => (
                    <p key={ingredient.name}>
                      {ingredient.quantity} {ingredient.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DietGenerator;
