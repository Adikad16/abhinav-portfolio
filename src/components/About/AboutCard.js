import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Abhinav Jadhav </span>
            from <span className="purple">India</span>.
            <br />
            I am an Electronics and Telecommunication Engineer and a Data Science enthusiast with experience in web development, full-stack projects, and data analysis.
            <br />
            I have completed my B.Tech and worked in various domains, including CDAC-DAC.
            <br />
            <br />
            Besides coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Visualization
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation is the key to progress!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav Jadhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
