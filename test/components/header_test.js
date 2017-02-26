import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header'

describe('Header', () => {
  let component;

  beforeEach(() => {
      component = renderComponent(Header)
  })
  it('should render the component', () => {
    expect(component).to.exist
  })
})
