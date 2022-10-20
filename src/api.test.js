import React from "react";
import { render } from "@testing-library/react";
import api from "./api";

it("renders without crashing", function() {
  render(<api />);
});