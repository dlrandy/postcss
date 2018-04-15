import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";

import asyncComponent from "../src/index.js";
describe("async-component tests", () => {
  test("test home async component", () => {
    const AsyncHome = asyncComponent(() =>
      import("./Home").then(module => module.default)
    );
    const wrapperAsyncHome = mount(<AsyncHome />);
    expect.assertions(1);
    const Home = require("./Home").default;
    const wrapperHome = mount(<Home />);
    const homeHtml = wrapperHome.html();
    return new Promise((resolve, reject) =>
      process.nextTick(() =>
        resolve(expect(wrapperAsyncHome.html()).toBe(homeHtml))
      )
    );
  });
});
