import React, {PureComponent} from 'react';

class HamburgerMenu extends PureComponent {

	render () {
		const inverted = this.props.menuExpanded ? " hamburger-menu--menuExpanded" : "";
		return (
			<div className={"hamburger-menu" + inverted} onClick={this.props.onClick}>
				<div className="hamburger-menu__bar"></div>
				<div className="hamburger-menu__bar"></div>
				<div className="hamburger-menu__bar"></div>
			</div>
		);
	}

}

export default HamburgerMenu;