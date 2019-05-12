import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css';

class SocialIcon extends PureComponent {

	render () {
		return (
			<a href={this.props.link} className="social-icon">
				<div className="social-icon__img">
					<i className={this.props.icon}></i>
				</div>
				<span className="social-icon__label">{this.props.title}</span>
			</a>
		);
	}

}

SocialIcon.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
	icon: PropTypes.string
};

export default SocialIcon;