import { screen, render } from "@testing-library/react";
import Hero from "./Hero";

it("should be render the file nav", () => {
    render(<Hero/>);
    const heroText = screen.getByText("All");
    expect(heroText).toBeInTheDocument();
})