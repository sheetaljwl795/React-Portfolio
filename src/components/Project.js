import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faCheckSquare, fa } from '@fortawesome/free-solid-svg-icons'

//import img from "../assets/projects/Dream-job-Finder.jpg";

import { removeHyphensAndCapitalize } from '../utils/helper';

function Project({ project }) {


  const { name, repo, link, description, img } = project;
  
  console.log(project)

  return (
    <div className="project" key={name}>
      <img
        // src={require(`../assets/projects/${name}.jpg`).default}
        src={img}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          { <a href={repo}>
            {/* <i className="fab fa-github"></i> */}
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a> }
          
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;