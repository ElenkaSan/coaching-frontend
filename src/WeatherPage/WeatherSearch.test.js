import React from "react";
import { render } from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";

it("renders without crashing", function() {
  render(<WeatherSearch />);
});