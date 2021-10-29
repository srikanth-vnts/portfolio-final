import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiNodejs,
  DiMongodb,
  DiMysql,
  
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://expressjs.com" target="_blank">
          {" "}
          <img
            src="https://camo.githubusercontent.com/4da8fbe32d03f3cd0c099af887ce14d1bff01c3325501bae56bc5ca9563548f9/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d6874747073253341253246253246766563746f7269666965642e636f6d253246696d61676573253246657870726573732d6a732d69636f6e2d32302e706e6726663d31266e6f66623d31"
            alt="express"
            width="50"
            height="50"
            color="#FFFFFF"
          />{" "}
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
