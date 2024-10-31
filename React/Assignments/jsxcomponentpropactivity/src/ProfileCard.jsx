// Importing the React code, the css file and my profile image to use in this component.

import React from 'react';
import './ProfileCard.css';
import profilePic from "./Profile_photo.jpg"


// This is really the main React code, putting the HTML into the ProfileCard function/component.
function ProfileCard() {

    // I just made an array to loop through his skills so that I didnt have to type them manually and render each one by hand, I let React handle that and made a default container that I styled with the CSS file. Thats the main thing React is useful for I've found, repetiative stuff and re-using elements over and over. 
    const skills = [
    "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB",
    "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis",
    "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
    ];

    return (

        // Basically everything you return is the HTML, you just wrap it in the return and parentheses so React can read and display it. But if you really look at it, its just basic HTML and React renders and displays cunks of it at a time depending on the order you put your components <Component />. 

        <div className="profile-card">
            <div className="profile-header">
                <img src={profilePic} alt="Profile" className="profile-image"></img>
                <div className="profile-info">
                    <h2>Scott Lewis<span className="verified-badge">&#10003;</span></h2>
                    <p>Persevere Full-Stack Student</p>
                </div>    
            </div>

            <div className="skills-section">
                <h3>SKILLS</h3>

                {/* This div and the skills.map is looping through the array I made above and the classNames are adding the CSS styles. The skills-list is a big container for all the skills and the skill-badge is what is styling all the individual skills with the blue ovals */}
                <div className="skills-list">
                    {skills.map(skill => (
                        <span className="skill-badge" key={skill}>{skill}</span>
                    ))}
                </div>
            </div>

            <div className="join-date">
                <span>&#128197; Joined: I don't Recall...</span>
            </div>


        </div>
    );

};


// Just exporting the ProfileCard Function/Component so that we can import it in the index.js and render it to screen. 
export default ProfileCard;