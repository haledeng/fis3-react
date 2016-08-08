import React, {
	Component
} from 'react';
import Popup from  './popup';


class Dialog extends Popup {
	constructor(props, context) {
		super(props, context)
		this.state = {
			content: 'from dialog. Will override text from popup'
		}
	}
	render() {
		return (
			<div>
				<p onClick={this.handleChick.bind(this)}>{this.state.content}</p>
			</div>
		)
	}
}

export default Dialog