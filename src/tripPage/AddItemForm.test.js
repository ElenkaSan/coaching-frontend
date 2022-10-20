import React from "react";
import { render } from "@testing-library/react";
import AddItemForm from "./AddItemForm";

it("renders without crashing", function() {
  render(<AddItemForm />);
});