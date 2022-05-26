import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
    let header
    beforeEach(()=>{
    header = shallow(<Header/>)
    })

  it("displays a heading", () => {
    const headerHeading = header.find("NavbarBrand")
    expect(headerHeading.length).toEqual(1)
  })
  it("displays a heading", () => {
    const headerLink = header.find("NavLink")
    expect(headerLink.length).toEqual(2)
  })
  it("displays a home icon", () => {
    const homeIconAltText = header.find("img").prop("alt")
    expect(homeIconAltText).toEqual("home link")
  })
})

