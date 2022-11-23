import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import { removeHyphensAndCapitalize } from '../utils/helper';

function Project({ project }) {


  const { name, repo, link, description, img } = project;
  
  console.log(project)

  return (
    <div className="project" key={name}>
      <img
        src={img}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          { <a href={repo}>            
          <FontAwesomeIcon icon={faGithub} />
          </a> }
          
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;