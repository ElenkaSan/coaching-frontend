import React from "react";
import { render } from "@testing-library/react";
import DateInput from "./DateInput";

it("renders without crashing", function() {
  render(<DateInput />);
});