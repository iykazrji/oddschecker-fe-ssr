import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "../components";

describe("Footer component", () => {
  it("Footer mounts succesfully", () => {
    const FooterWrapper = mount(<Footer />);
    FooterWrapper.mount();
  });
});
