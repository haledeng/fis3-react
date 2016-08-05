import React, {Component} from 'react';


class Input extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			text: this.props.text || ''
		}
	}
	handleSubmit(e) {
		const text = e.target.value;
		console.log(text);
		if (e.which === 13) {
			this.props.onSubmit(text);
			this.setState({
				text: ''
			});
		} 
	}
	handleChange(e) {
		this.setState({
			text: e.target.value
		});
	}
	render() {
		return (
	      <input type="text"
	        autoFocus="true"
	        value={this.state.text}
	        onChange={this.handleChange.bind(this)}
	        onKeyUp={this.handleSubmit.bind(this)} />
		)
	}
}

export default Input;