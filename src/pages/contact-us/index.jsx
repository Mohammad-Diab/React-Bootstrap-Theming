import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";
import { useState } from 'react';

function ContactUs() {

  const [radioValue, setRadioValue] = useState('h');

  const radios = [
    { name: 'Question', value: 'q' },
    { name: 'Suggestion', value: 's' },
    { name: 'Problem', value: 'p' },
    { name: 'Greeting', value: 'h' },
  ];

  return (
    <Container className="h-xl-100">
      <Row className="h-xl-100 align-content-center">
        <Col className="align-self-center">
          <h1 className="display-1 mb-4">Say Hello!</h1>
          <p className="text-muted font-italic mb-3">If you have any new idea, question about code, or just want to say hello, you can send me a message.</p>

        </Col>
        <Col className="border rounded-3 px-4 py-3 shadow-sm form-box" >
          <h4 className="text-center mb-3">Send me a Message...</h4>
          <Form>
            <FloatingLabel controlId="formFullName" label="Enter your full name" className="mb-3">
              <Form.Control placeholder="Enter your full name" type="text" />
            </FloatingLabel>

            <FloatingLabel controlId="formEmail" label="Your email (optional)" className="mb-3">
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </FloatingLabel>

            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Label>Message type</Form.Label>
              <ButtonGroup className="d-flex">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant='outline-secondary'
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>

            <FloatingLabel controlId="formMessage" label="Your message goes here..." className="mb-3">
              <Form.Control as="textarea" placeholder="Your message goes here..." style={{ height: '100px' }} />
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default ContactUs;
