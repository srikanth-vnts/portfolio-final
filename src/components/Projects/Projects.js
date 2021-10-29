import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import interntheory from "../../Assets/Projects/interntheory.jpg";
import urbanCompany from "../../Assets/Projects/urbanCompany.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interntheory}
              isBlog={false}
              title="UI Clone of Intern Theory"
              description="Intern Theory is an online platform to land internships in any field and our desired company."
              link="https://github.com/AlbartJose/InternTheoryClone_Unit3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interntheory}
              isBlog={false}
              title="Enhancing Interntheory.com Clone using backend functionalities"
              description="We also make the pages more user interactive and also linked the site to a database for user related activities.
It now stores all the data related to the user in the database which can be used when the user login again on the website. Each user data is also stored separately hence we can track multiple users at the same time."
              link="https://github.com/AlbartJose/InternTheory_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urbanCompany}
              isBlog={false}
              title="Clone of Urban Company"
              description="This is a clone of www.urbancompany.com website. Urban Company is Asia’s largest online home services platform."
              link="https://github.com/srikanth-vnts/Urban_Company_Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
