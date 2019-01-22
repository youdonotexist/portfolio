import React, {Component} from 'react';
import HeaderViewModel from "../viewmodel/HeaderViewModel"
import {Link} from 'react-router-dom'


class Header extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		var self = this;
		var currentSection = self.props.currentSection ? self.props.currentSection.toLowerCase() : "";

		return (
			<div className="App-header">
					<div className="Header-Main">
						<div className="App-title"> Cam Daly</div>
						<div className="App-subtitle"> A study in doing random things</div>
					</div>
			</div>
		);
	}
}

export default Header;