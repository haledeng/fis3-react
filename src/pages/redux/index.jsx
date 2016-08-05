import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import create from './store';
import App from './app';

const store = create();
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
)