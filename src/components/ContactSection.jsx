import { React, useState, useRef } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_ID;

export default function ContactSection() {
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
    <section id="contact" className="home-contact contact-page-area">
      <Container>
        <Row>
          <Col sm={5} md={5} lg={5}>
            <h2 className="section-title">Contact Me</h2>
            <p></p>
            <div className="email">
              <h3>Email</h3>
              <span>j.munoz1@yahoo.com</span>
            </div>
          </Col>
          <Col sm={7} md={7} lg={7}>
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
                style={{ height: "100px" }}
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
        <Row>
        <Col>
            <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202260.17787137572!2d-122.23412018239668!3d37.61827101345081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9431b601597d%3A0x70474dec26939c0!2sHayward%2C%20CA!5e0!3m2!1sen!2sus!4v1692980535151!5m2!1sen!2sus" />
            </div>
        </Col>
      </Row>
      </Container>
    </section>
  );
}
