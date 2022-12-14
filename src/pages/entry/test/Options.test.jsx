import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

describe("Options component", () => {
  it("displays image for each scoop option from server", async () => {
    render(<Options optionType="scoops" />);

    //find the images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  it("displays image for each topping option from server", async () => {
    render(<Options optionType="toppings" />);

    const toppingsImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(toppingsImages).toHaveLength(3);

    const altText = toppingsImages.map((element) => element.alt);
    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
