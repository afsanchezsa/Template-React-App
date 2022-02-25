import { Button as ButtonBT } from "react-bootstrap";

const Button = ({ text, variant }) => {
  return (
    <div className="d-grid gap-2">
      <ButtonBT variant={variant}>{text}</ButtonBT>{" "}
    </div>
  );
};

export default Button;
