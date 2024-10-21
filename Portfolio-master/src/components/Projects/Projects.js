import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Agro Sage"
              description="I developed a machine learning-based Crop Prediction module that recommends crops based on soil and weather data, improving agricultural productivity. The system was optimized for accuracy through careful data preprocessing and model evaluation."
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Diabetes Management"
              description="I developed an AI-powered web app that analyzes food images to provide glycemic index information and dietary recommendations, improving diabetes management. The app uses Google Generative AI and Gradio for accurate analysis and a user-friendly interface."
              ghLink="https://github.com/DadvaiahPavan/Diabetics_Management"
              demoLink="https:/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Article Summarizer"
              description="Created SummarizerAI, a web app that generates concise article summaries using RapidApi's AI Summarizer, with a user-friendly interface built in HTML, CSS, JavaScript, and ReactJS. Integrated an Article Extractor and Summarizer API for improved content efficiency and accessibility."
              ghLink="https://github.com/DadvaiahPavan/AI-Summarize"
              demoLink="https://openai-summary.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="resume builder"
              description="Built a Resume Builder Website that enables users to create and personalize professional resumes with ease, offering features like various templates, PDF export, and dark mode. Developed using React, Bootstrap, Chakra UI, and other tools."
              ghLink="https://github.com/DadvaiahPavan/Resume-builder"
              demoLink="https://instantresume.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="KGR-Canteen-Chatbot"
              description="The Canteen Chatbot project enhances campus dining by using AI to streamline order placement, provide real-time updates, and offer personalized meal recommendations. It aims to reduce wait times, improve order accuracy, and optimize menu offerings through data analytics."
              ghLink="https://github.com/DadvaiahPavan/KGR-Canteen-Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blinkit Report Dashboard"
              description="Developed an interactive Power BI dashboard for Blinkit to visualize key metrics and trends, including order trends, product performance, and customer insights. Utilized DAX and Power Query for advanced data analysis and integration of various data sources."
              ghLink="https://github.com/DadvaiahPavan/Blinkit_Report"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
