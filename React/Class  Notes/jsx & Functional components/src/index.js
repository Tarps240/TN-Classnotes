//This is to import react library for the page to start runing JSX and react code
import React from "react"
//ReactDOM allows us to render the react code, JSX, Component to the root div in HTML
import ReactDOM from "react-dom"
//import an image
import ProfileIMG from "./image/Designer.jpeg"
//JSX- WHen we are trying to render a simple html jsx element Just store it in a variable. 
//style My header
const headerStyle = {
  backgroundColor: "yellow",
  padding: 20,
  lineHeight: 3,
  fontFamily: "Helvetica "
}
const mainStyle = {
  color: "White",
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
  fontFamily: "arial",
  fontSize: 10
}


// const profileImg = <img src={ProfileIMG} alt="Profile Image" />


const ProfileImg = () => {
  return (
    <>
        <img src={ProfileIMG} alt="Profile Image" />
        <figcaption>profile image</figcaption>
    </>
  );
}

const greetings = "Welcome to React"
const subgreeting = "This is the first JSX aplication we will make"
const name = {
  firstName: "Kelebet",
  LastName: "Engida"
}
const date = "10/22/2024"

// One component the header component
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>{greetings}</h1>
      <h2>{subgreeting}</h2>
      <h4>{name.firstName} {name.LastName}</h4>
      <p>{date}</p>
      <ProfileImg />  
    </header>
  )
}


const Skills = () => {
  const skills=["html", "css", "JS", "Python", "Java", "node", "Express"]
  const skillsList = skills.map(eachSkill => <li>{eachSkill}</li>)
  return (
    <ul style={listStyle}>{skillsList}</ul>
  )
}
function Main() {
  return (
    <main style={mainStyle}>
      <h1>The primary languages needed for building a website:</h1>
      {/* <ul style={listStyle}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul> */}
      <Skills />
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
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
//This root variable is refering to the root elemet in the index flie
const root = document.getElementById("root")
//WHere ReactDOM uses the render method which takes the code that needs to be rendered and where it will be rendered
ReactDOM.render(<App />, root)
