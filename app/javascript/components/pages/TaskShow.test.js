import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TaskShow from './TaskShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When TaskShow renders", () => {

    let task_show
    beforeEach(() => {
      task_show = shallow(<TaskShow />)
    })

  it("displays a heading", () => {
    const showHeader = task_show.find("h1")
    expect(showHeader.text()).toEqual("TaskShow")
  })
  it("displays two subheadings", () => {
    const taskItem = task_show.find("h3")
    expect(taskItem.length).toEqual(2)
  })
  it("displays three buttons", () => {
    const buttonCounter = task_show.find("Button")
    expect(buttonCounter.length).toEqual(3)
  })
})
