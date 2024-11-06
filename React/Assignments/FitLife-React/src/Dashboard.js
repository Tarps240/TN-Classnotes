import React from 'react';
import HabitSummary from './HabitSummary';
import habitService from '../services/habitService';

function Dashboard() {
    const user = authService.getCurrentUser();
    const todayHabits = habitService.getTodaysHabits();

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <HabitSummary habits={todayHabits} />
        </div>
    );
}

export default Dashboard;