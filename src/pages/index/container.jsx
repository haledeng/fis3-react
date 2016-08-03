import React from 'react';
import Dialog from '../../modules/dialog/dialog';

const buttons = [{
	text: 'confirm'
}, {
	text: 'cancel'
}];

const confirm = () => {
	console.log('comfirm');
}


const Container = React.createClass({
	getInitialState() {
		return {
			showDialog: false,
			content: ''
		}
	},

	toggle() {
		let {
			showDialog
		} = this.state;
		this.setState({
			showDialog: !showDialog,
			content: showDialog ? 'click button to show' : 'click button to hide'
		});
	},
	render() {
		let {
			showDialog,
			content
		} = this.state;
		return ( < div >
			< a href = "javascript:;"
			style = {
				{
					marginBottom: "10px"
				}
			}
			onClick = {
				this.toggle
			} > {
				showDialog ? 'click to hide' : 'click to show'
			} < /a> {
			showDialog ? < Dialog title = 'dlg title'
			content = {
				content
			}
			buttons = {
				buttons
			}
			comfirm = {
				confirm
			}
			/> : null} < /div >
		)
	}
});


export default Container