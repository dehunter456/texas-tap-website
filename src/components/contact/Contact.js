import React, {PureComponent} from 'react';
import SocialIcon from './SocialIcon.js';
import Button from '../misc/Button.js';
import '../../styles/contact.css';

class Contact extends PureComponent {

	render () {
		return (
			<div className="contact">
				<h3 className="--inverted">Contact Us</h3>
				<p className="--inverted">To find us in person, we usually meet in the <a href="#" className="contact__anchor-tag --inverted">S.A.C. 2.310 Dance 
				Studio</a> every Wednesday from 5:00 PM to 7:00PM. </p>
				<p className="--inverted">Otherwise, you can find us on our social media!</p>
				<div className="icon-container">
					<SocialIcon title="Facebook" icon="fab fa-facebook-f" link="http://www.facebook.com" />
					<SocialIcon title="Twitter" icon="fab fa-twitter" link="http://www.twitter.com" />
					<SocialIcon title="Instagram" icon="fab fa-instagram" link="http://www.instagram.com" />
				</div>
				<p className="--inverted">...or you can give us an email!</p>
				<Button link="mailto:dehunter456@gmail.com" style="inverted" text="Send us an email!" />
			</div>
		);
	}

}

export default Contact;