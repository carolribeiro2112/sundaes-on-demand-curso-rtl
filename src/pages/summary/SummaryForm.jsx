import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function SummaryForm({ setOrderPhase }) {
  const [tcChecked, setTcChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPhase("completed");
  };

  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Body>No Ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger trigger={"hover"} placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          style={{ width: "250px" }}
          type="checkbox"
          checked={tcChecked}
          onChange={(event) => setTcChecked(event.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  );
}

export default SummaryForm;
