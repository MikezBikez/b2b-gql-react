import { renderComponent , expect } from '../test_helper'
import App from '../../client/components/child/Hello'

describe('Child' , () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  }) 

  it('renders something', () => {
    expect(component).to.exist
  })

  it('shows the correct text', () => {
    expect(component).to.contain('Hello Son')
  })

})