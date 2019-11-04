import React from 'react'
import { shallow } from 'enzyme'

import TaskDetails from './TaskDetails.js'

it('renders without props', () => {
  shallow(<TaskDetails />)
})
