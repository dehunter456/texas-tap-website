import React, {Component} from 'react';

class MenuItems extends Component {

	render () {
		const expandedClass = this.props.expanded ? " nav-list--expanded" : "";
		return (
			<div className={"nav-list" + expandedClass}>
				<a href="#about" className="nav-list__item" onClick={this.props.onItemClick}>Who Are We?</a>
				<a href="#schedule" className="nav-list__item" onClick={this.props.onItemClick}>Our Schedule</a>
				<a href="#contact" className="nav-list__item" onClick={this.props.onItemClick}>Contact Us</a>
				<a href="#" className="nav-list__item" onClick={this.props.onItemClick}>Buy Tap Shoes!</a>
			</div>
		);
	}

}

export default MenuItems;