import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import mockedData from "./tripMockedData.json";
import Card from "../components/Card/Card";
import TagPool from "../components/TagPool/TagPool";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
  });

  it("renders the featuredSection", () => {
    render(<App />);
    const featuredSection = screen.getByTestId("featured-multimarket-section");
    expect(featuredSection).toBeInTheDocument();
  });

  it("renders the multiMakret-section", () => {
    render(<App />);
    const featuredSection = screen.getByTestId("multimarket-section");
    expect(featuredSection).toBeInTheDocument();
  });
});

describe("Card", () => {
  it("renders Card component with sample data", () => {
    render(<Card trip={mockedData} />);

    // Verifica el renderizado básico
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(
      screen.getByAltText(`${mockedData.title} Image`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockedData.title)).toBeInTheDocument();
    expect(screen.getByText(mockedData.destination)).toBeInTheDocument();
  });
});

describe("Tags", () => {
  it("renders TagsPool component with sample data", () => {
    render(
      <TagPool
        tags={mockedData.tags}
        hasSoloTraveller={mockedData.hasSoloTraveller}
      />
    );

    expect(screen.getByText("SOLO TRAVEL")).toBeInTheDocument();
    expect(screen.getByText("Multi-Country")).toBeInTheDocument();
  });
});
