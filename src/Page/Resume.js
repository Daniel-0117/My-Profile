import React from 'react';

const Resume = () => {
  return (
  <div className='skills'>
    <p>
      Download my <a href="add linkdin profile">resume</a>
    </p>
    <div className='row mt-5'>
      <div className='col-12 col-md-6 d-flex flex-column align-items-center mb-6'>
        <h3>Front-end Proficiences</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">HTML</li>
          <li class="list-group-item">CSS</li>
          <li class="list-group-item">Javascript</li>
          <li class="list-group-item">jQuery</li>
          <li class="list-group-item">responsive design</li>
          <li class="list-group-item">React</li>
          <li class="list-group-item">Bootstrap</li>
          <li class="list-group-item">Tailwind</li>
        </ul>
      </div>
        <div className='col-12 col-md-6 d-flex flex-column align-items-center mb-6'>
          <h3>Back-end Proficiences</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">APIs</li>
            <li class="list-group-item">Node</li>
            <li class="list-group-item">Express</li>
            <li class="list-group-item">MySQL, Sequelize</li>
            <li class="list-group-item">MongoDB, Mongoose</li>
            <li class="list-group-item">Rest</li>
            <li class="list-group-item">GraphQL</li>
          </ul>
      </div>
    </div>
  </div>
  );
};

export default Resume;