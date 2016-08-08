import React, {
	Component
} from 'react';


class Popup extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			content: 'this is Popup'
		}
	}
	handleChick() {
		this.setState(Object.assign({}, this.state, {
			content: 'change form outside'
		}))
	}
	render() {
		return null;
	}
}

export default Popup