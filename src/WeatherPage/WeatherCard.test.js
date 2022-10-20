import React from "react";
import { render } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

it("renders without crashing", function() {
  render(<WeatherCard />);
});