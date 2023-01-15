import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders two Card elements", () => {
  render(<App />);
  const cardElements = screen.getAllByLabelText("flip-card");
  expect(cardElements).toHaveLength(2);
});
