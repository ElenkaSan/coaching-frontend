import React from "react";
import { render } from "@testing-library/react";
import amadeusApi from "./amadeusApi";

it("renders without crashing", function() {
  render(<amadeusApi />);
});