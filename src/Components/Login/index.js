import { Button as ButtonBT } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from "../Button";
import Input from "../Input";

import "./Login.css";

const Login = () => {
  return (
    <div className="container login">
      <Link to="/">
        <ButtonBT variant="outline-success"> atras </ButtonBT>
      </Link>
      <br />
      <h1 className="login-header">Log in</h1>
      <Input size="default" placeholder="Email or User" type="email" />
      <Input size="default" placeholder="********" type="password" />
      <Button variant="success" text="Login" />
    </div>
  );
};

export default Login;
