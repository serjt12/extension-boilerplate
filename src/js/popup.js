import React from 'react'
import Greeting from './popup/greeting_component.jsx'
import { render } from 'react-dom'
import '../img/myusmall.png'
import '../img/cart.png'
import '../css/myus1.css'
import '../css/popup1.css'

render(
  <Greeting />,
  window.document.getElementById('app-container')
)
