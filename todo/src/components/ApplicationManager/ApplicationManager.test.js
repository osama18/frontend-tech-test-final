import React from 'react'
import { shallow } from 'enzyme'

import ApplicationManager from './ApplicationManager.js'

it('renders without props', () => {
  shallow(<ApplicationManager />)
})
