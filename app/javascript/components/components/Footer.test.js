
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe("When Footer renders", () => {
  it("displays a text", () => {
    const footer = shallow(<Footer />)
    const footerText = footer.find("h1")
    expect(footerText.text()).toEqual("©Eventually... Brought to you by BravoVision")
  })
})
