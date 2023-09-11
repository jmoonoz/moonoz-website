import React from "react";
import SectionTemplate from "../Components/SectionTemplate";
import PageHero from "../Components/PageHero";
import { Button, Row, Col } from "react-bootstrap";

function Error() {
  return (
    <SectionTemplate idName={"*"}>
      <Row>
        <Col className="error-Col">
          <PageHero heroTitle="404" />
          <h2>You look a little lost</h2>
          <h4>lets help you find your way back</h4>
          <Button variant="outline-light" href="/">
            Home
          </Button>
        </Col>
      </Row>
    </SectionTemplate>
  );
}

export default Error;
