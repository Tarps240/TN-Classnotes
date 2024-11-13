import React from 'react';

function HabitSummary({ habits }) {
    return (
        <div>
            <h2>Todays Summary</h2>
            <div className="summary-box">Water: {habits.water} glasses</div>
            <div className="summary-box">Meals: {habits.meals}</div>
            <div className="summary-box">Exercise: {habits.exercise} minutes</div>
            <div className="summary-box">Sleep: {habits.sleep} hours</div>
            <div className="summary-box">Calories: {habits.calories} kcal</div>
        </div>
    );
}

export default HabitSummary;