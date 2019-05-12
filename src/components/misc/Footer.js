import React, {PureComponent} from 'react';
import '../../styles/footer.css';

class Footer extends PureComponent {

	render () {
		return (
			<div className="footer">
				<div className="footer__primary-txt">Copyright 2019 © – Texas Tap</div>
				<div className="footer__secondary-txt">Icons provided by FontAwesome.</div>
			</div>
		);
	}

}

export default Footer;