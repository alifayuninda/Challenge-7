import { screen, render } from "@testing-library/react";
import LandingPage from "./LandingPage";

it("should be render welcome", () => {
    render(<LandingPage/>);
    const textWelcome = screen.getByText("welcome guys");
    expect(textWelcome).toBeInTheDocument();
});