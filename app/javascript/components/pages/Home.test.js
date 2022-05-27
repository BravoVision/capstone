import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {

  let home
  beforeEach(() => {
    home = shallow(<Home />)
  })

  it("displays an image", () => {
    const homeHeading = home.find("img").at(0).prop("alt")
    expect(homeHeading).toEqual("Eventually")
  })
  it("displays a subheading", () => {
    const subheading = home.find("h3")
    expect(subheading.text()).toEqual("Your personal online to-do list.")
  })
  it("displays a tagline", () => {
    const tagLine = home.find("h4")
    expect(tagLine.text()).toEqual("A Place to keep track of life, and handle things... eventually.")
  })
  it("has two buttons", () => {
    const buttons = home.find("Button")
    expect(buttons.length).toEqual(2)
  })
})