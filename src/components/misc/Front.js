import React, {PureComponent} from 'react';
import '../../styles/front.css';
import logo from '../../assets/tt-logo.svg';

class Front extends PureComponent {

	render () {
		return (
			<div className="front">
				<img src={logo} className="front__logo" />
				<div className="front__tagline">
					<h1 className="--normal">Open to everyone. Tap shoes not required.</h1>
					<div className="front__bar"></div>
					<p className="--normal">Join us in <a href="#" className="--normal">S.A.C. 2.310</a> every Wednesday from 5:00 PM to 7:00 PM! </p>
				</div>
			</div>
		);
	}

}

export default Front;