import './dialog.less'
import classNames from 'classnames'
import React, {
	Component
} from 'react'

class Dialog extends Component {
	constructor(props, context) {
		super(props, context)
	}
	confirm() {
		this.props.confirm();
	}
	render() {
		const self = this;
		return (
			<div className="dialog" style={{display: this.props.show ? 'block' : 'none'}}>
				<div className="dlg-mask"></div>
				<div role="container" className="dialog-inner">
					<div role="header" className="dialog-hd">
						<div role="title" className="dialog-title">{this.props.title}</div>
						<a role="close" className="dialog-close" href="javascript:;" onClick={this.confirm.bind(self)}>&times;</a>
					</div>
					<div role="body" className="dialog-bd">
						<div role="content" className="dialog-container">{this.props.content}</div>
					</div>
					<div role="footer" className="dialog-ft">
						{this.props.buttons.map(function(button, index){
							return (<button role="button" key={index} className={classNames('btn', 'mr5')} onClick={self.confirm.bind(self)}>{button.text}</button>)
						})}
					</div>
				</div>
			</div>
		);
	}
}
export default Dialog