import React from 'react';
import Ul from './ul.jsx';
import Dialog from './dialog.jsx';
import {render} from 'react-dom';

const person = [
	{name: 'helon', age: 26},
	{name: 'lucal', age: 30}
];
render(
	<Ul person={person}/>,
	document.getElementById('container')
);