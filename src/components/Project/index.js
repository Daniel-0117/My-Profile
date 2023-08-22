import React from 'react';

const Project = ({project}) => {
  return <div className='col'>
    <div class="card ">
        <img 
            src={require(`../../assets/projects/${project.name}.png`)} 
            class="card-img" 
            alt={project.name} 
         />
  <div class="card-img-overlay">
    <h3 class="card-title">
        <a href={project.link}  rel='card-text'>
            {project.name}
        </a>
        <a href={project.repo}  rel='card-text'>
            <i class="fab fa-github"></i>
        </a>
    </h3>
        <p class="card-text">
            {project.description}
        </p>
  </div>
</div>
  </div>
};

export default Project;