import React from 'react'
import { shallow } from 'enzyme'

import EditableTaskField from './EditableTaskField.js'

it('renders without props', () => {
  shallow(<EditableTaskField />)
})
