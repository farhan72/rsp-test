import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  ButtonToggle,
  Container,
} from "reactstrap";
import { FormLogin } from "../styled-components/login";

export default function LoginContainer() {
  return (
    <Container>
      <FormLogin>
        <Form>
          <h3 className="text-center">Login</h3>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" />
          </FormGroup>
          <ButtonToggle color="primary" block>
            Login
          </ButtonToggle>
        </Form>
      </FormLogin>
    </Container>
  );
}
