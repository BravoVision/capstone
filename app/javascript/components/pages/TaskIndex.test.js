import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TaskIndex from './TaskIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When TaskIndex renders", () => {

    let task_index
    beforeEach(() => {
      task_index = shallow(<TaskIndex />)
    })

  it("displays a heading", () => {
    const indexHeader = task_index.find("h1")
    expect(indexHeader.text()).toEqual("Task Index")
  })
})
