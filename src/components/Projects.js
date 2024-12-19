import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Online Shopping Cart ",
      description: "Developed a mini online shopping cart system using C language, enabling users to conveniently add items to their cart through a simple interface. Implemented with basic functions, users can navigate and interact with the program seamlessly within a C compiler environment. "
    },
    {
      title: "Population Growth Prediction",
      description: "As a team leader guided the teammates and assigned the work according to their skills and capabilities. The project aims to predict the whether the population by taking inputs country size, birth rate, death rate, migration rate and environmental factors"
    },
    {
      title: "Covid Prediction using Machine Learning",
      description: "In this project the dataset is collected from the real time. Here I used all the machine learning algorithms to predict whether the person is affected with the covid or not."
    },
    {
      title: "Pneumonia Prediction using Deep Learning",
      description: "In this project, I used some of the deep learning models here the dataset is divided according to the severity of the disease so that the model predicts the output with high accuracy and I have designed the model to research in the upcoming years"

    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
