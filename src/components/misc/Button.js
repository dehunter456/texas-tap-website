import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.css';

class Button extends PureComponent {
	render () {
		return(
			<a href={this.props.link} className={"button button--" + this.props.style}>
				{this.props.text}
			</a>
		);
	}
}

Button.propTypes = {
	link: PropTypes.string,
	style: PropTypes.string,
	text: PropTypes.string
}

export default Button;