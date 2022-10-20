import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";

it("renders without crashing", function() {
  render(<LoginForm />);
});
