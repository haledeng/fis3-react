import './dialog.less';
import React, {
	Component
} from 'react';

const Dialog = React.createClass({
	getInitialState() {
		return {
			isShow: true
		}
	},
	hide() {
		this.setState({
			isShow: false
		});
	},
	comfirm() {
		this.hide();
		this.props.comfirm();
	},
	render() {
		const self = this;
		return (
			<div className="dialog" style={{display: this.state.isShow ? 'block' : 'none'}}>
				<div className="dlg-mask"></div>
				<div role="container" className="dialog-inner">
					<div role="header" className="dialog-hd">
						<div role="title" className="dialog-title">{this.props.title}</div>
						<a role="close" className="dialog-close" href="javascript:;" onClick={this.hide}>&times;</a>
					</div>
					<div role="body" className="dialog-bd">
						<div role="content" className="dialog-container">{this.props.content}</div>
					</div>
					<div role="footer" className="dialog-ft">
						{this.props.buttons.map(function(button, index){
							return (<button role="button" key={index} className="btn" onClick={self.comfirm}>{button.text}</button>)
						})}
					</div>
				</div>
			</div>
		);
	}
})

export default Dialog