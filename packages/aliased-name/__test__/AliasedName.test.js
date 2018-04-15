import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";

import AliasedName from "../src/index.js";
describe("aliased-name component tests", () => {
  it("true should be true", () => {
    expect(true).toBe(true);
  });
  test("shallow component, Span mouse events", () => {
    const mockFunc = jest.fn();
    const shallowComponent = shallow(
      <AliasedName
        isSVIP={true}
        name="Andy"
        onLongHoverStartUsername={mockFunc}
        id={111}
      />
    );

    expect(shallowComponent.text()).toBe("Andy");

    shallowComponent.simulate("mouseenter");
    expect(shallowComponent.hoverTimer).not.toBeNull();
  });
  test("full component Span mouse events", () => {
    const mockFunc = jest.fn();
    const mockMouseLeaveFunc = jest.fn();
    const clickMockFunc = jest.fn();

    const fullComponent = mount(
      <AliasedName
        isSVIP={true}
        name="Andy"
        onLongHoverStartUsername={mockFunc}
        onLongHoverEndUsername={mockMouseLeaveFunc}
        onClicktUsername={clickMockFunc}
        id={111}
      />
    );

    expect(fullComponent.text()).toBe("Andy");

    fullComponent.simulate("mouseenter");

    expect(fullComponent.instance().hoverTimer).not.toBeNull();
    jest.runAllTimers();
    expect(mockFunc).toHaveBeenCalled();

    fullComponent.simulate("mouseleave");
    expect(fullComponent.instance().hoverTimer).toBeNull();
    jest.runAllTimers();
    expect(mockMouseLeaveFunc).toHaveBeenCalled();
    fullComponent.simulate("click");
    expect(clickMockFunc).toHaveBeenCalledWith({
      id: 111,
      name: "Andy",
      el: fullComponent.instance().el
    });
  });
  test("static component, Span mouse events", () => {
    const staticComponent = render(
      <AliasedName isSVIP={true} name="Andy" id={111} />
    );

    expect(staticComponent.text()).toBe("Andy");
  });
});
