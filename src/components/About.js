import React from "react";
import profileImage from "../assets/SheetalJawale.jpg";

function About() {
  return (
    <div>
        
        <h3 style={{ padding: "20px 50px"}}>Full Stack Developer</h3>
       
        <div>
            <img src={profileImage} style={{ width: "25%", float:"left", padding: "50px"}} alt="profile" />
            
            <p style={{ width: "50%", float:"left", padding: "50px"}}> 
            A highly proficient full-stack engineer with experience in web development, unit testing, project management, and problem-solving. Expertise in front-end and back-end technologies, including HTML/CSS, JavaScript/jQuery, Responsive Design, Bootstrap, Node.js, Express.js, React.js, MongoDB, MySQL, API Design, Git, and Progressive Web Applications.
            </p>

        </div>       
        
    </div>
  );
}

export default About;