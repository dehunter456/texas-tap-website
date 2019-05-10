import React, { PureComponent } from 'react';
import '../styles/button.css';

class Button extends PureComponent {
	render () {
		return(
			<a href={this.props.link} className={"button --" + this.props.style}>
				{this.props.text}
			</a>
		);
	}
}

export default Button;