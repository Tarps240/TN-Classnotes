import React from 'react';

const ColorBar = ({ color }) => {
    return (
        <div className = 'color-bar' style={{ backgroundColor: color }}>
            {color}
        </div>
    );
}; 

export default ColorBar;