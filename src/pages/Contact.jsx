import { React, useState, useRef } from "react";
import PageHero from "../Components/PageHero";
import {
  Button,
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import SectionTemplate from "../Components/SectionTemplate";
import transition from "../transition";

const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_ID;

function Contact() {
  const [validated, setValidated] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    // prevents page refresh
    e.preventDefault();

    // sends email
    emailjs.sendForm(service, template, form.current, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // resets input
    e.target.reset();
  };

  return (
    <SectionTemplate idName={"contact"}>
      <PageHero heroTitle={"Reach Me Here"} />
      <Row>
        <Col sm={9} md={9} lg={9}>
          <Form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col sm={6} md={6} lg={6} xl={6}>
                <Form.Group>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ex: Joel"
                    name="first"
                  />
                </Form.Group>
              </Col>
              <Col sm={6} md={6} lg={6} xl={6}>
                <Form.Group>
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Munoz"
                    name="last"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Example@email.com"
                name="email"
              />
            </Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Write to me"
              style={{ height: "200px" }}
              name="message"
            />
            <Form.Text id="emailJS-mention" muted>
              Powered by EmailJS
            </Form.Text>
            <div className="form-button">
              <Button variant="outline-light" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      {/* <Row>
        <Col>
            <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202260.17787137572!2d-122.23412018239668!3d37.61827101345081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9431b601597d%3A0x70474dec26939c0!2sHayward%2C%20CA!5e0!3m2!1sen!2sus!4v1692980535151!5m2!1sen!2sus" />
            </div>
        </Col>
      </Row> */}
    </SectionTemplate>
  );
}

export default transition(Contact);
