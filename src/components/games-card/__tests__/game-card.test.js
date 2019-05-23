import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import GameCard from "../components/game-card";

describe("GameCard", () => {
  it("Matches the Snapshot", () => {
    const renderTree = renderer
      .create(
        <MemoryRouter initialEntries={["/"]}>
          <GameCard.WrappedComponent />
        </MemoryRouter>
      )
      .toJSON();
    expect(renderTree).toMatchSnapshot();
  });

  it("Renders blank when no props are passed", () => {
    const Wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <GameCard.WrappedComponent />
      </MemoryRouter>
    );
    Wrapper.mount();
  });
});
