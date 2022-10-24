import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import WeatherPage from "./WeatherPage";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
    <WeatherPage />
    </BrowserRouter>);
});
