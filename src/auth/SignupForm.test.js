import React from "react";
import { render } from "@testing-library/react";
import SignupForm from "./SignupForm";

it("renders without crashing", function() {
  render(<SignupForm />);
});
