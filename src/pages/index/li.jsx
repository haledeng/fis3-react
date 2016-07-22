require('./li.less');
import React, {Component} from 'react';



class Li extends Component {
	render() {
		return (<li>name is {this.props.people.name}, age is {this.props.people.age}</li>);
	}
}

export default Li