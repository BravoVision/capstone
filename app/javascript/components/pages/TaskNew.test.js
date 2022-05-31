import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskNew from "./TaskNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When TaskNew renders", () => {
  let taskNew;
  beforeEach(() => {
    taskNew = shallow(<TaskNew />);
  });

  it("displays a heading", () => {
    const taskNewHeadingText = taskNew.find("h1").text();
    expect(taskNewHeadingText).toEqual("TaskNew");
  });

  it("displays a form", () => {
    const taskNewForm = taskNew.find("Form");
    expect(taskNewForm.length).toEqual(1);
  });

  it("displays a button", () => {
    const taskNewButton = taskNew.find("Button");
    expect(taskNewButton.length).toEqual(1);
  });
});
