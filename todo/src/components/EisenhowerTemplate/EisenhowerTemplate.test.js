import React from 'react'
import { shallow } from 'enzyme'

import EisenhowerTemplate from './EisenhowerTemplate.js'

it('renders without props', () => {
  shallow(<EisenhowerTemplate />)
})
