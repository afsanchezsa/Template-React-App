import { Button as ButtonBT } from "react-bootstrap";

const Button = ({ text, variant,type}) => {
  return (
    <div className="d-grid gap-2">
      <ButtonBT variant={variant} type={type}>{text}</ButtonBT>{" "}
    </div>
  );
};

export default Button;
