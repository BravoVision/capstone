import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'

Enzyme.configure({ adapter: new Adapter() })

describe("When About Us renders", () => {
    let aboutUs
    beforeEach(()=>{
    aboutUs = shallow(<AboutUs/>)
    })

  it("displays two headings", () => {
    const aboutUsHeading = aboutUs.find("h1")
    expect(aboutUsHeading.length).toEqual(2)
  })

  it("displays a subheading", () => {
    const subHeading = aboutUs.find("h3")
    expect(subHeading.text()).toEqual("Why do today what you can put off until tomorrow?")
  })

  it("has two containers", () => {
    const containerCount = aboutUs.find("Container")
    expect(containerCount.length).toEqual(2)
  })

  it("displays 4 cards", () => {
    const cardCount = aboutUs.find("Card")
    expect(cardCount.length).toEqual(4)
  })

})