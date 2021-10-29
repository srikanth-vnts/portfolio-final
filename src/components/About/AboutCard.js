import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srikanth VNTS </span>
            <span>
              I am a passionate and detail-oriented full-stack developer with
              hands-on experience in building full-scale websites.
              <br />
              <br />I am very curious about new technologies and pick up new
              languages quite fast. I got introduced to the tech world during my
              time in a school as an administrative officer where I had to
              oversee a team which was responsible for building the school's
              website. It was exhilarating to see the result in the form of a
              fully responsive website.
              <br />
              <br />
              So, I decided to learn coding. Now, I'm learning Full Stack Web
              Development at Masai School. I'm getting a hang of JavaScript,
              Data Structures, Algorithms, HTML, CSS, React, MongoDB, and
              Express and have been getting hands-on experience at using them to
              create user-oriented end-to-end websites.{" "}
            </span>
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Srikanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
