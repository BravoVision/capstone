import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound renders", () => {
    let notFound
    beforeEach(()=>{
    notFound = shallow(<NotFound />)
    })

  it("displays a text", () => {
    const notFound404 = notFound.find("h1")
    expect(notFound404.text()).toEqual("404")
  })
  
  it("displays a text", () => {
    const notFoundText = notFound.find("h2")
    expect(notFoundText.text()).toEqual("NotFound")
  })

})