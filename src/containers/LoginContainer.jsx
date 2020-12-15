import React, { useState } from "react";
import cookies from "js-cookie";
import { authAPI } from "../api/baseAPI";
import { Form, Input, Button, Row, Col, Alert } from "antd";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};

export default function LoginContainer() {
  const [status, setStatus] = useState({
    error: false,
    message: "",
  });

  const login = (values) => {
    callAPILogin(values);
  };

  const callAPILogin = (request) => {
    setStatus({
      error: false,
      message: "",
    });
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
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", backgroundColor: "#f1f1f1" }}
    >
      <Col span={10} offset={5}>
        <Form {...layout} layout="vertical" name="basic" onFinish={login}>
          <h3>Login</h3>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "email does not valid",
              },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 8,
                message: "Minimum password is 8 characters",
              },
            ]}
          >
            <Input.Password placeholder="********" />
          </Form.Item>
          {status.error ? (
            <Form.Item>
              <Alert message={status.message} type="error" showIcon />
            </Form.Item>
          ) : null}
          <Form.Item>
            <Button type="primary" htmlType="submit" block={true}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
