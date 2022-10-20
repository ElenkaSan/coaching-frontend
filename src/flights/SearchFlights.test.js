import React from "react";
import { render } from "@testing-library/react";
import SearchFlights from "./SearchFlights";

it("renders without crashing", function() {
  render(<SearchFlights />);
});
