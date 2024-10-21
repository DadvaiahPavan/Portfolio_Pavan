import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavan Dadvaiah </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I recently graduated with a Bachelor's degree in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning from KG Reddy College of Engineering and Technology.
            <br />
            I have hands-on experience in data analytics, machine learning, and web development, having worked on various projects like Agro Sage and Blinkit Report Dashboard.
            <br />
            <br />
            Apart from my technical pursuits, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Driven by data, powered by innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Dadvaiah Pavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
