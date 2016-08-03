import React from 'react';
import {
	render
} from 'react-dom';
import Container from  './container'

const buttons = [{
	text: 'confirm'
}, {
	text: 'cancel'
}];

const confirm = () => {
	console.log('comfirm');
}

render( 
	<Container />,
	document.getElementById('container')
);