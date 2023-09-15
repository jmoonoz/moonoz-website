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
import { motion } from "framer-motion";
import SlideIn from "../Components/slideIn";

const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_ID;

export default function Contact() {
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
      <Row >
        <Col sm={9} md={9} lg={9} className="col-hidden">
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
    </SectionTemplate>
  );
}
