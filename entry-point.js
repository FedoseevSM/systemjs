import ReactDOM from 'react-dom'
import React from 'react'

import { ReactAppFrom } from './app.jsx'

import "styles/app.css"

ReactDOM.render(<ReactAppFrom />, document.querySelector('#root'));

console.log("hello from entry-point")