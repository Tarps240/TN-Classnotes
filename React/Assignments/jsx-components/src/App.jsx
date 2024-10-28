import './App.css'
import ColorBar from './ColorBar';

const App = () => {
    const colors = [ '#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0' ];

    return (
        <div className = "color-container">
            <h1>My Color Bar App</h1>
            {colors.map((color, index) => (
        <ColorBar key={index} color={color} />
      ))}
        </div> 
    );

};

export default App;