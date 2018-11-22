'use strict';

const e = React.createElement;

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {visible : true};
	}
	
	render() {
		if (this.state.visible) {
			return 'show';
		}
	}
	
	return e(
		'button',
		{onClick: () => this.setState({visible: true})},
		'like'
	);
}

const domContainer = document.querySelector("#form_handler");
ReactDOM.render(e(Form1), domContainer);
