import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";

it("should be render the file nav", () => {
    render(<Navbar/>);
    const navText = screen.getByText("input here");
    expect(navText).toBeInTheDocument();
})