import { InputGroup, FormControl } from "react-bootstrap";

const Input = ({ size, placeholder, type }) => {
  return (
    <InputGroup size={size} className="mb-3">
      <FormControl
        type={type}
        placeholder={placeholder}
        aria-label={size}
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  );
};

export default Input;
