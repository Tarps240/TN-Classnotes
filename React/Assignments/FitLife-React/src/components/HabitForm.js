import React, { useState } from 'react';
import habitService from '../services/habitService';

function HabitForm() {
    const [formData, setFormData] = useState({
        water: 0,
        meals: '',
        exercise: '',
        sleep: 0,
        calories: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        habitService.saveHabit(formData);
        alert('Habits logged successfully');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Water Intake (0-8 glasses):
                <input type="number" name="water" value={formData.water} onChange={handleChange} min="0" max="8" />
            </label>
            <label>
                Meals:
                <input type="text" name="meals" value={formData.meals} onChange={handleChange} />
            </label>
            <label>
                Exercise (minutes):
                <input type="text" name="exercise" value={formData.exercise} onChange={handleChange} />
            </label>
            <label>
                Sleep Hours (0-24 hours):
                <input type="number" name="sleep" value={formData.sleep} onChange={handleChange} min="0" max="24" />
            </label>
            <label>
                Calorie Intake:
                <input type="number" name="calories" value={formData.calories} onChange={handleChange} />
            </label>
            <button type="submit">Log Habits</button>
        </form>
    );
}

export default HabitForm;