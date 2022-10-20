import React from "react";
import { render } from "@testing-library/react";
import AddHotel from "./AddHotel";

it("renders without crashing", function() {
  render(<AddHotel />);
});
