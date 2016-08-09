import classNames from 'classnames';
import React, {Component} from 'react';

import './button.css';


class Button extends Component {
	render() {
		let {onClick, children} = this.props;
		return (
			<a href="javascript:;" className={classNames('btn', 'btn-default')} onClick={onClick}>
				{children}
			</a>
		)
	}
}


export default Button