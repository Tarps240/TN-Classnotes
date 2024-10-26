import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const rootElement = document.getElementById('root');

const ColorBar = ({ color }) => {
    return (
        <div className = 'color-bar' style={{ backgroundColor: color }}>
            {color}
        </div>
    );
}; 

const App = () => {
    const colors = [ '#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0' ];

    return (
        <div className = "color-container">
            {colors.map((color, index) => (
        <ColorBar key={index} color={color} />
      ))}
        </div> 
    );

};

export default App;