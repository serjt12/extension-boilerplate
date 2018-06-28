import React from 'react'
import Greeting from './popup/greeting_component.jsx'
import { render } from 'react-dom'

render(
  <Greeting />,
  window.document.getElementById('app-container')
)
