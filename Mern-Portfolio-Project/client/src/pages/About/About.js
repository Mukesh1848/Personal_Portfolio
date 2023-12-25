import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import myimage from '../../assets/docs/personal image.jpg';
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={myimage}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              As a recently graduated B.Tech Computer Science professional, I am a self-motivated and hardworking individual. With a passion for learning, I quickly adapt to new technologies and concepts. Specializing in Software development with React.js, HTML, CSS, and JavaScript, I also excel in back-end development using Node.js, Express.js, Rest Api and databases such as MongoDB and SQL. With a strong foundation in API testing, I ensure the reliability and functionality of web applications. Explore my portfolio and connect with me for exciting opportunities. I am I thrive in collaborative environments, leveraging my problem-solving skills to deliver efficient solutions. I am dedicated to staying up-to-date with the latest technologies and continuously expanding my knowledge to provide exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
