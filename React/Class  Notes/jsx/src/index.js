//This is to import react library for the page to start runing JSX and react code
import React from "react"
//ReactDOM allows us to render the react code, JSX, Component to the root div in HTML
import ReactDOM from "react-dom"

//JSX- WHen we are trying to render a simple html jsx element Just store it in a variable. 

//style My header
const headerStyle={
  backgroundColor:"yellow",
  padding:20,
  lineHeight:3,
  fontFamily:"Helvetica "
}

const mainStyle = {
  color: "blue",
  border: "solid",
  borderWidth: 3,
  backgroundColor: "purple",
  textAlign: "center",
  fontFamily: "comic sans ms",
  }
const listStyle = {
  listStyle: "none"
}


const footerStyle = {
  backgroundColor: "darkblue",
  padding: 10,
  color: "lightblue",
  textAlign: "center",
  border: 5,
  borderStyle: "bold",
  fontFamily:"arial",
  fontSize: 10
}

// One component the header component
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Welcome to React</h1>
      <h2>This is the first JSX aplication we will make</h2>
      <h4>Instructor: Kelebet Engida</h4>
      <p>10/22/2024</p>
    </header>
  )
}

const Main = () => {
  return (
    <main style = {mainStyle}>
    <h1>The primary languages needed for building a website:</h1>
      <ul style = {listStyle}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </main>
  )
}

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <h5>Mr E</h5>
      <h4>October 2024</h4>
    </footer>
  )
}
//this is the best way to write our JSX element, as component 
const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
//This root variable is refering to the root elemet in the index flie
const root = document.getElementById("root")
//WHere ReactDOM uses the render method which takes the code that needs to be rendered and where it will be rendered
ReactDOM.render(<App />, root)