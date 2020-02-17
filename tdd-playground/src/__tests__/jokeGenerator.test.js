import React from "react";
import { render } from "@testing-library/react";

import Joke from "../joke";

test("joke component gets props and renders text", () => {
  const { getByTestId } = render(<Joke text="The funniest joke this year." />);

  expect(
    getByTestId("joke-text").toHaveTextContent("The funniest joke this year.")
  );
});
