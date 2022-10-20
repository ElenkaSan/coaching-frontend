import React from "react";
import { render } from "@testing-library/react";
import Timers from "./Timers";

it("renders without crashing", function() {
  render(<Timers />);
});