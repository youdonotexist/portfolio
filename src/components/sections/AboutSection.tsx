import React from 'react';
import {AboutViewModel, ContactMethodModel} from "../../viewmodel/AboutViewModel";

interface AboutSectionState {
	socialMediaItems: ContactMethodModel[]
}

export class AboutSection extends React.Component<{}, AboutSectionState> {
	private viewModel: AboutViewModel;
	constructor(props) {
		super(props);

		this.viewModel = new AboutViewModel();
		this.state = {
			socialMediaItems: []
		}
	}

	public componentDidMount() {
		this.viewModel.getData().subscribe((items) => {
			this.setState({'socialMediaItems': items})
		});
	}

	public render() {
		return (
			<div className={"Section"}>
				<div className="Header-logos-container">
					{this.state.socialMediaItems.map((obj, index) => {
						return <a key={index} href={obj.url} target="_blank" className="Header-logos"> <img
							alt={obj.url} className="Header-logos-img" src={obj.icon}/> </a>
					})}
				</div>
				<div className="About-txt">
					Camren is a software engineer with over 10 years of experience building various things.

					<br/><br/>

					Such various things include technologies such as iOS, Android, Unity, and now, Web.

					<br/><br/>
				</div>
			</div>
		)
	}
}
