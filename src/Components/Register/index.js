import React from "react";

import { Form, Button as ButtonBT } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../Redux/ActionCreators/AuthActionCreator";
import { Link } from "react-router-dom";

import Button from "../Button";

import "./Register.css";

function mapStateToProps(state) {
  return {
    user: state.AuthReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register_user: (email, password) => dispatch(registerUser(email, password)),
  };
}

function RegisterComponent(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="container register">
      <h1>Usuario Global</h1>
      {JSON.stringify(props.user)}
      <br></br>
      <h1>Usuario Local</h1>
      email: {email}
      <br></br>
      password: {password}
      <br></br>
      <Link to="/">
        <ButtonBT variant="outline-success"> atras </ButtonBT>
      </Link>
      <h1 className="register-head">Register</h1>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          props.register_user(email, password);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" text="submit">
          Submit
        </Button>
        <div className="register-social">
          <Button variant="primary" text="google">
            Submit
          </Button>
          <Button variant="primary" text="facebook">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

/*

  <Link to="/login"><Button variant="primary" >
        LOGIN
      </Button></Link>
      <Link to="/register"><Button variant="primary" type="submit">
        Register
      </Button></Link>

*/
