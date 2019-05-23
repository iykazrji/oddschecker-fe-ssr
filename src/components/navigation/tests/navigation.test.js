import React from "react";
import Navigation from "../components";
import CachetteNavigation from "../components/cachette-navigation";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";
import "jest-styled-components";

describe("Navigation", () => {
  it("Properly renders the Vanilla Navigation", () => {
    const renderTree = renderer
      .create(
        <StaticRouter context={{}}>
          <Navigation navHeight={80} />
        </StaticRouter>
      )
      .toJSON();
    expect(renderTree).toMatchSnapshot();
  });

  it("Properly renders CachetteNavigation", () => {
    const renderTree = renderer.create(
      <StaticRouter context={{}}>
        <CachetteNavigation
          navHeight={90}
          initVisible={true}
          navComponent={<Navigation navHeight={80} />}
        />
      </StaticRouter>
    );
  });
});
