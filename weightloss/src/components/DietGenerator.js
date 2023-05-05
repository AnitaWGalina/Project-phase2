import React from "react";
// import ReactDOM from "react-dom";

function DietGenerator({ dietData }) {
  return (
    <div>
      {dietData.dailyPlan?.map((plan, index) => {
        <span>Day ${index + 1}:</span>;
        for (const meal of plan.meals) {
          <p> For meal ${meal.type} you should eat:</p>;
          for (const ingredient of meal.ingredients) {
            <p>
              {ingredient.quantity} {ingredient.name}
            </p>;
          }
          console.log("");
        }
      })}
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default DietGenerator;
