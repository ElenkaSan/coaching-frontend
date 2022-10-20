import React from "react";
import { render } from "@testing-library/react";
import CountDownTrip from "./CountDownTrip";

it("renders without crashing", function() {
  render(<CountDownTrip />);
});