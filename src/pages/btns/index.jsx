import React from 'react'
import {render} from 'react-dom'
import Button from './button'

const click = () => {
	console.log('click');
}

render(
	<Button onClick={click}>click me</Button>,
	document.getElementById('container')
)