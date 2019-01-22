import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HeaderViewModel from "../viewmodel/HeaderViewModel";

class NavigationComponent extends Component {
	constructor(props) {
		super(props);

		this.viewModel = new HeaderViewModel();
		this.state = {
			sections: []
		};
	}

	componentDidMount() {
		var component = this;
		this.viewModel.getData().subscribe((items) => {
			component.setState({'sections': items})
		});
	}

	render() {
		return (
			<div className="Navigation-Container">
				<div className="Header-sections">
					{this.state.sections.map(function (sectionName, index) {
						return (
							<Link key={index} to={'/' + sectionName.toLowerCase()}
							      className={"Header-section"}> {sectionName} </Link>
						)

					})}
				</div>
			</div>
		);
	}
}

NavigationComponent.propTypes = {};

export default NavigationComponent;
