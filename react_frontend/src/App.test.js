import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Regular screen by default", () => {
  render(<App />);
  const mainRegion = screen.getByRole("main", { name: /regular screen/i });
  expect(mainRegion).toBeInTheDocument();
});
