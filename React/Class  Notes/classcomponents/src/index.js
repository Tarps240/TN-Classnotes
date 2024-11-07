import React from 'react';
import ReactDOM from 'react-dom/client';
//class component General Syntax

class StudentIntroduction extends React.Component {
  participants = {
    firstStudent: "Scott",
    secoundStudent: "Michale",
    TA: "Chris"
  }
  render() {
   
    return (
      <div>
        <h1>Welcome to React Class</h1>
        <p>These are the participants of this class</p>
        <ol>
          <h4>{this.participants.firstStudent}</h4>
          <h4>{}</h4>
        </ol>
      </div>
    )
  }
}

//Each student create their class component with their firstname and last name 

class Students extends React.Component {

secondStudent = {
  firstName: "Michael",
  lastName: "Mahone"
}
render () {
  return (
    <div>
      <h1>I'm a newbie to React</h1>
      <p>I am a participant.  See my name below:</p>
      <ul>
        <h4>{this.secondStudent.firstName} {this.secondStudent.lastName}</h4>
      </ul>
      
    </div> 
    )
  }
}

class Scottie extends React.Component {
  
  thirdStudent = {
    firstName: 'Scott',
    lastName: 'Lewis'
  }
  
  render () {
    return (
      <div>
      <h1>Hello, my name is {this.thirdStudent.firstName} {this.thirdStudent.lastName}</h1>
      <h2>I'm currently learning React.js</h2>
      </div>
    );
  }
  
}



const App = () => {
  return (
    <div>
      <StudentIntroduction />
      <Scottie />
      <Students />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);