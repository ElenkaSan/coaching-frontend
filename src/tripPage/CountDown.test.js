import React from "react";
import { render } from "@testing-library/react";
import CountDown from "./CountDown";

it("renders without crashing", function() {
  render(<CountDown />);
});