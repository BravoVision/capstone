import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TaskEdit from "./TaskEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When TaskEdit renders", () => {
    let taskEdit;
    let currentUser = {id: 1}
    beforeEach(() => {
    taskEdit = shallow(<TaskEdit current_user={currentUser} />);
    });

    it("displays a heading", () => {
    const taskEditHeadingText = taskEdit.find("h1").text();
    expect(taskEditHeadingText).toEqual("Task Update");
    });

    it("displays a form", () => {
    const taskEditForm = taskEdit.find("Form");
    expect(taskEditForm.length).toEqual(1);
    });

    it("displays a button", () => {
    const taskEditButton = taskEdit.find("Button");
    expect(taskEditButton.length).toEqual(1);
    });
});
