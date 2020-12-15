import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Alert,
  Button,
} from "reactstrap";
import { FormLogin, InputGroup } from "../styled-components/login";
import cookies from "js-cookie";
import { authAPI } from "../api/BaseAPI";

export default function LoginContainer() {
  const [status, setStatus] = useState({
    error: false,
    message: "",
  });
  const [valid, setValidField] = useState({
    email: true,
    password: true,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validation = () => {
    fieldEmpty();
    !status.error && checkFormatEmail();
    !status.error && minimumPassword();
  };

  const fieldEmpty = () => {
    const fieldEmpty = email.trim().length <= 0 || password.trim().length <= 0;
    setStatus({
      error: fieldEmpty,
      message: fieldEmpty ? "This field cannot be empty" : "",
    });
    setValidField({
      email: email.length > 0,
      password: password.length > 0,
    });
  };

  const checkFormatEmail = () => {
    const regexEmail = new RegExp(
      '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'
    );
    if (email) {
      setStatus({
        error: !regexEmail.test(email),
        message: "Email does not valid",
      });
      setValidField({ email: regexEmail.test(email), password: true });
    }
  };

  const minimumPassword = () => {
    if (password) {
      setStatus({
        error: password.length < 8,
        message: password.length < 8 ? "Minimum password is 8 characters" : "",
      });
      setValidField({ password: password.length >= 8, email: true });
    }
  };

  const login = (event) => {
    event.preventDefault();
    validation();
    if (!status.error) {
      const request = {
        email,
        password,
      };
      callAPILogin(request);
    }
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const callAPILogin = (request) => {
    authAPI
      .post("login", request)
      .then((result) => {
        if (result.status === 200) {
          cookies.set("accessToken", result.data.token, {
            expires: 7,
            path: "/",
          });
        }
      })
      .catch((error) => {
        if (error.response.data) {
          setStatus({
            error: true,
            message: error.response.data.error,
          });
        } else {
          alert(error);
        }
      });
  };

  return (
    <Container>
      <FormLogin>
        <Form>
          <h3 className="text-center">Login</h3>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={!valid.email ? { border: "1px solid red" } : null}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={!valid.password ? { border: "1px solid red" } : null}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-muted"
                size="sm"
                onClick={(e) => toggleShowPassword(e)}
              />
            </InputGroup>
          </FormGroup>
          {status.error ? (
            <Alert color="danger" className="p-1">
              {status.message}
            </Alert>
          ) : null}
          <Button type="submit" color="primary" block onClick={(e) => login(e)}>
            Login
          </Button>
        </Form>
      </FormLogin>
    </Container>
  );
}
