import React, { FC } from 'react';
import './Projects.css';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <div className="app__projects app__bg section__padding">
    <h1 className='app__projects_header headtext'>Projects I Have Worked On</h1>

    <h1>Notifications</h1>
    <h2>Tools Used</h2>
    <p className='app__about-description p__notosans'>Azure Event Hub, Spring Boot, SQL, Rest API</p>
    <h2>Description</h2>
    <p className='app__about-description p__notosans'> Sends notifications to users based on shipment status, eta changes, late, arrived, etc.</p>

    <h1>Claims</h1>
    <h2>Tools Used</h2>
    <p className='app__about-description p__notosans'>Angular, Spring Boot, REST API</p>
    <h2>Description</h2>
    <p className='app__about-description p__notosans'>Allows users to submit claims for items</p>

    <h1>Integrating Third Party Data</h1>
    <h2>Tools Used</h2>
    <p className='app__about-description p__notosans'>Spring Boot, Angular, REST API</p>
    <h2>Description</h2>
    <p className='app__about-description p__notosans'>Retrieved shipment data, from third party, and displayed it within the user portal</p>
  </div>
);

export default Projects;
