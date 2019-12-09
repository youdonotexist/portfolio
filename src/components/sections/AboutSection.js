import React, {Component} from 'react';
import AboutViewModel from "../../viewmodel/AboutViewModel";

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
							alt={obj.url} className="Header-logos-img" src={obj.icon}/> </a>
					})}
				</div>
				<div className="About-txt">
				Camren is a software engineer with over 10 years of experience building various things.

				<br/><br/>

				Such various things include technologies such as iOS, Android, Unity, Web.

				<br/><br/>
				</div>
			</div>
		)
	}
}

AboutSection.propTypes = {};

export default AboutSection;
