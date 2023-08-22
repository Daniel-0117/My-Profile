import React from 'react';
import { formatProjectName } from '../../utils';
import './style.css';


const Project = ({project}) => {
  return <div className='col'>
    <div className="card h-100">
        <img 
            src={require(`../../assets/projects/${project.name}.png`)} 
            className="card-img" 
            alt={formatProjectName(project.name)} 
         />
  <div className="card-img-overlay d-flex flex-column justify-content-center project-info">
    <h3 className="card-title">
        <a href={project.link}  rel='card-text me-4'>
            {formatProjectName(project.name)}
        </a>
        <a href={project.repo}  rel='card-text'>
            <i className="fab fa-github"></i>
        </a>
    </h3>
        <p className="card-text">
            {project.description}
        </p>
  </div>
</div>
  </div>
};

export default Project;