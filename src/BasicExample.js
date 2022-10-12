import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export class BasicExample extends React.Component {
  render() {
    return (
      // <Form>
      //   <Form.Group className="mb-3" controlId="formBasicEmail">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control type="email" placeholder="Enter email" />
      //     <Form.Text className="text-muted">
      //       We'll never share your email with anyone else.
      //     </Form.Text>
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicPassword">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control type="password" placeholder="Password" />
      //   </Form.Group>
      //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
      //     <Form.Check type="checkbox" label="Check me out" />
      //   </Form.Group>
      //   <Button variant="primary" type="submit">
      //     Submit
      //   </Button>
      // </Form>

      <Container>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
