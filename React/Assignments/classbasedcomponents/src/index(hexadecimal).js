import React from "react";
import ReactDOM from "react-dom/client";

class ColorGrid extends React.Component {
  render() {

    // Array of color codes to map through and assign to boxes.
    const colors = [
      "#4e417e", "#02dc92", "#dfbaa0", "#d8394e", "#7c31d3", "#7fcfd2", "#0e5d46", "#d98590",
      "#7923d7", "#6e5eeb", "#2a176b", "#dea1d8", "#cbae6f", "#b6841d", "#62df7d", "#9e4d2c",
      "#393b73", "#8cface", "#1a4f07", "#045529", "#04e754", "#697980", "#018120", "#5bdcc7",
      "#7010b2", "#c50007", "#cfe583", "#cdb58e", "#298b5d", "#58e253", "#a9c3c5", "#66fec5",
    ];

    // Individual blocks styles.
    const blockStyle = {
      color: "white",
      aspectRatio: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      boxSizing: "border-box",
    };

    // Overall grid container styles.
    const gridContainerStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",  // 8 columns
      gridTemplateRows: "repeat(4, 1fr)",     // 4 rows
      height: "95vh", 
      width: "95vw", 
      margin: "0 auto", 
      gap: '5px',
    };

    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>Hexadecimal Colors</h1>
        <div style={gridContainerStyle}>

          {/* Map over the colors array to create color squares dynamically */}

          {colors.map((color, index) => (
            <div key={index} style={{ ...blockStyle, backgroundColor: color }}>
              {color}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ColorGrid />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);