import React from "react";
import { render } from "@testing-library/react";
import AddFlight from "./AddFlight";

it("renders without crashing", function() {
  render(<AddFlight />);
});
