export default function add(state = [], action) {
	if (action.type === 'ADD') {
		return [action.text].concat(...state);
	}
	return state;
}
