import React from 'react';
import { Line } from 'recharts';

function ProgressGraph({ data }) {
    return (
        <div>
            <h2>Progress Over Time</h2>
            <Line data={data} dataKey="value" name="Habit Progress" />
        </div>
    );
}

export default ProgressGraph;