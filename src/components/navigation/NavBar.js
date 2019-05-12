import React, {Component} from 'react';
import HamburgerMenu from './HamburgerMenu.js';
import MenuItems from './MenuItems.js';
import '../../styles/navbar.css'

class NavBar extends Component {

	constructor (props) {
		super(props);
		this.state = { menuExpanded: false }
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount () {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount () {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	// Sets a reference outside this component
	setWrapperRef (node) {
		this.wrapperRef = node;
	}

	handleClick (e) {
		const isMenuExpanded = this.state.menuExpanded;
		this.setState({ menuExpanded: !isMenuExpanded });
	}

	// If the reference outside this component is clicked (everything outside the nav bar), retract the menu
	handleClickOutside (e) {
		if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
			this.setState({ menuExpanded: false });
		}
	}

	render () {
		return (
			<div className="navbar" ref={this.setWrapperRef}>
				<HamburgerMenu onClick={this.handleClick} menuExpanded={this.state.menuExpanded} />
				<MenuItems expanded={this.state.menuExpanded} onItemClick={this.handleClick} />
			</div>
		);
	}

}

export default NavBar;