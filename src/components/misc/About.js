import React, {PureComponent} from 'react';
import aboutImage from "../../assets/about_placeholder-cropped.jpg";
import '../../styles/about.css';

class About extends PureComponent {

	render () {
		return (
			<div className="about">
				<div className="about__content-con about__content-con--ralign">
					<h3 className="--inverted">Who Are We?</h3>
					<p className="--inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
					id est laborum.</p>
				</div>
				<div className="about__content-con about__content-con--lalign">
					<img src={aboutImage} className="about__img" />
				</div>
			</div>
		);
	}

}

export default About;