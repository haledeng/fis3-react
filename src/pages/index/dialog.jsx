import React, {Component} from 'react';

class Dialog extends Component {
	render() {
		return (
			<div class="dialog">
				<div class="dlg-mask"></div>
				<div role="container" class="dialog-inner">
					<div role="header" class="dialog-hd">
						<div role="title" class="dialog-title">{this.props.title}</div>
						<a role="close" class="dialog-close" href="javascript:;">&times;</a>
					</div>
					<div role="body" class="dialog-bd">
						<div role="content" class="dialog-container">{this.props.content}</div>
					</div>
					<div role="footer" class="dialog-ft"></div>
				</div>
			</div>
		)
	}
}


export default Dialog