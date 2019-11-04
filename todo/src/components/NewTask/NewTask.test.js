import React from 'react'
import { shallow } from 'enzyme'

import NewTask from './NewTask.js'

it('renders without props', () => {
  shallow(<NewTask />)
})
