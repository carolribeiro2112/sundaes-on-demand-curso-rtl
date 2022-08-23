import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import Options from "../Options";

describe("TotalUpdates", () => {
  it("Should update scoop subtotal when scoops change", async () => {
    render(<Options optionType="scoops" />, {
      wrapper: OrderDetailsProvider,
    });

    // make sure total starts out $0.00
    const scoopsSubtotal = screen.getByText("Scoops total: $", {
      exact: false,
    });
    expect(scoopsSubtotal).toHaveTextContent("0.00");

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.00");
    // update chocolate scoops to 2 and check the subtotal

    const chocolateInput = await screen.findByRole("spinbutton", {
      name: "Chocolate",
    });

    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, "2");
    expect(scoopsSubtotal).toHaveTextContent("6.00");
  });

  it("Should update toppings subtotal when toppings change", async () => {
    render(<Options optionType="toppings" />);

    const toppingsTotal = screen.getByText("Toppings total: $", {
      exact: false,
    });
    expect(toppingsTotal).toHaveTextContent("0.00");

    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    userEvent.click(cherriesCheckbox);
    expect(toppingsTotal).toHaveTextContent("1.50");

    const hotFudgeCheckbox = screen.getByRole("checkbox", {
      name: "Hot fudge",
    });
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent("3.00");

    const MeMsCheckbox = screen.getByRole("checkbox", { name: "M&Ms" });
    userEvent.click(MeMsCheckbox);
    expect(toppingsTotal).toHaveTextContent("4.50");

    //remove one topping
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsTotal).toHaveTextContent("3.00");
  });
});
