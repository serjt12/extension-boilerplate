import React from 'react'
import Greeting from './popup/greeting_component.jsx'
import { render } from 'react-dom'
import '../css/myus.css'
import '../css/popup.css'

render(
  <Greeting />,
  window.document.getElementById('app-container')
)
