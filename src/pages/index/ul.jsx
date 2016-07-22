import Li from './li.jsx';
import React, {Component} from 'react';


// loop item should has key prop
class Ul extends Component {
	render() {
		return  (<ul>
			{this.props.person.map(function(prop, i) {
				return (<Li people={prop} key={i}/>)
			})}
			</ul>)
	}
}

export default Ul