import React from 'react'
import { shallow } from 'enzyme'

import TemplateFactory from './TemplateFactory.js'

it('renders without props', () => {
  shallow(<TemplateFactory />)
})
