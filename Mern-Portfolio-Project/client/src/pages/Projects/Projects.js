import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
import prologo from '../../assets/docs/prologo.PNG';
import imgSecondProject from '../../assets/docs/P2.jpeg';
import imgThirdProject from '../../assets/docs/P3.png'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        I've crafted a dynamic personal portfolio showcasing my skills and projects. Additionally, I developed an intuitive e-commerce platform and a task management app, demonstrating proficiency in diverse web applications.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack Project </span>
                  <img
                    src={prologo}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.Js</span>
                  <span className="card-detail-badge">Express.Js</span>
                  <span className="card-detail-badge">Node.Js</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Personal Portfolio Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn" target="_blank" rel="noreferrer"
                    href="https://github.com/Mukesh1848/Personal_Portfolio"
                    
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack Application</span>
                  <img 
                    src={imgSecondProject}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React.Js</span>
                  <span className="card-detail-badge">Express.Js</span>
                  <span className="card-detail-badge">Node.Js</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">E-Commerce Application</h6>
                  </div>
                  <a
                    className="ad-btn" target="_blank" rel="noreferrer"
                    href="https://github.com/Mukesh1848/E-commerce-Mern2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End Application</span>
                  <img
                    src={imgThirdProject}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">React.JS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">HTML/CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Task Management Application</h6>
                  </div>
                  <a className="ad-btn"  target="_blank" rel="noreferrer" href="https://github.com/Mukesh1848/Task-Management-Application">
                    View
                  </a>
                </div>
              </div>
            </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
