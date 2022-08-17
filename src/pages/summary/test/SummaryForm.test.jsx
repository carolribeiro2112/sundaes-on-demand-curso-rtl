import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SummaryForm", () => {
  it("should render the initial conditions", () => {
    render(<SummaryForm />);
    // get the elements on the screen
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    //check if checkbox is unchecked
    expect(checkbox).not.toBeChecked();
    //check if button is disabled
    expect(button).toBeDisabled();
  });
  it("should enables the button when checkbox is checked and disables the button on the second click", () => {
    render(<SummaryForm />);
    // get the elements on the screen
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    // click on the checkbox
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    //second click
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
