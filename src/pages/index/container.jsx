import React, {
	Component
} from 'react';
import Dialog from '../../modules/dialog/dialog';

const buttons = [{
	text: 'confirm'
}, {
	text: 'cancel'
}];


class Container extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			showDialog: false,
			content: 'click button to show'
		}
	}
	toggle() {
		let {
			showDialog
		} = this.state;
		this.setState({
			showDialog: !showDialog,
			content: showDialog ? 'click button to show' : 'click button to hide'
		})
	}
	confirm() {
		this.setState(Object.assign({}, this.state, {
			showDialog: false
		}));
	}
	render() {
		let {
			showDialog,
			content
		} = this.state;
		return ( 
			<div>
			<a href = "javascript:;" onClick={this.toggle.bind(this)}> 
				{showDialog ? 'click to hide' : 'click to show'} 
			</a> 
			{
				showDialog ? 
				<Dialog title="dlg title" show={showDialog} content={content} buttons={buttons} confirm={this.confirm.bind(this)}/> 
				: null
			} 
			</div>
		)
	}
};


export default Container;