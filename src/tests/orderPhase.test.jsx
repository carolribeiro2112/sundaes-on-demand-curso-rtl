import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("order phases for happy path", () => {
  // render app
  render(<App />);
  // add ice cream scoops and toppings
  // find and click order button
  // accept terms and conditions and click button to confirm order
  // confirm order number on confirmation page
  // click "new order" button on confirmation page
  // check that scoops and toppings subtotals have been reset
  // do we need to await anything to avoid test errors?
});
