import React from "react";
import { render } from "@testing-library/react";
import WeatherPage from "./WeatherPage";

it("renders without crashing", function() {
  render(<WeatherPage />);
});