import React, {Component} from 'react';
import AboutViewModel from "../viewmodel/AboutViewModel";

class AboutSection extends Component {
	constructor(props) {
		super(props);

		this.viewModel = new AboutViewModel();
		this.state = {
			socialMediaItems: []
		}
	}

	componentDidMount() {
		var component = this;
		this.viewModel.getData().subscribe((items) => {
			component.setState({'socialMediaItems': items})
		});
	}

	render() {
		return (
			<div className={"Section"}>
				<div className="Header-logos-container">
					{this.state.socialMediaItems.map(function (obj, index) {
						return <a key={index} href={obj.url} target="_blank" className="Header-logos"> <img
							alt={obj.url} className="Header-logos" src={obj.icon}/> </a>
					})}
				</div>
				<div className="About-txt">
				Camren is a software engineer with over 10 years of experience building random things.

				<br/><br/>

				Such random things include technologies such as iOS, Android, Unity, Web.

				<br/><br/>

				To build said random things she enjoys using Reactive programming patterns.
				</div>
			</div>
		)
	}
}

AboutSection.propTypes = {};

export default AboutSection;
