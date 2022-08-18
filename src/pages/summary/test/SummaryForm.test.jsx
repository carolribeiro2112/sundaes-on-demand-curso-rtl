import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    userEvent.click(checkbox);
    expect(button).toBeEnabled();
    //second click
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
  it("should appear a popover when mouse is on terms and conditions", async () => {
    render(<SummaryForm />);
    //Popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
    //Popover appears upon mouse over of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();
    //Popover Disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
