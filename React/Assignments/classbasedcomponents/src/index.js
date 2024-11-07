
import React from 'react';
import ReactDOM from 'react-dom/client';


class ColorBlocks extends React.Component {
  render() {

    const blockStyle = {
        color: 'white',
        padding: '20px',
        margin: '5px',
        borderRadius: '5px',
        border: '3px solid black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    };

    return (
      <div style={{ textAlign: 'center', maxWidth: '80vw', margin: 'auto' }}>
        <h1>Here are some color bars!</h1>
        <div style={{ ...blockStyle, backgroundColor: '#518cef'}}>#518cef</div>
        <div style={{ ...blockStyle, backgroundColor: '#3b10c4'}}>#3b10c4</div>
        <div style={{ ...blockStyle, backgroundColor: '#9aede6'}}>#9aede6</div>
        <div style={{ ...blockStyle, backgroundColor: '#8ee763'}}>#8ee763</div>
        <div style={{ ...blockStyle, backgroundColor: '#a30dd0'}}>#a30dd0</div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ColorBlocks />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
