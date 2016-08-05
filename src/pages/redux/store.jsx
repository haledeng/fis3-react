import {createStore} from 'redux';
import reducer from './reducer';

export default function create(preloadState) {
	return createStore(
		reducer,
		preloadState
	)
}