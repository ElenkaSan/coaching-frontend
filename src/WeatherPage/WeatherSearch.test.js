import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
    <WeatherSearch />
    </BrowserRouter>);
});
