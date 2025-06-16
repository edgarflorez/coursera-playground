import { render, screen, fireEvent } from "@testing-library/react";
import Increment from "../components/Increment";

test("Increment by one", () => {
  // render the Increment component
  render(<Increment />);

  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  const btn = screen.getByTestId("addOne");

  // click the submit
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");
});
