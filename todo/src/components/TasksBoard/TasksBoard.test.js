import React from 'react'
import { shallow } from 'enzyme'

import TaskList from './TaskList.js'

it('renders without props', () => {
  shallow(<TaskList />)
})
