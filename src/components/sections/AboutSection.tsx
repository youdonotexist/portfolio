import React from 'react';
import {AboutViewModel, ContactMethodModel} from "../../viewmodel/AboutViewModel";
import {GitHistoryComponent} from "../about/GitHistoryComponent";

interface AboutSectionState {
	socialMediaItems: ContactMethodModel[]
}

export class AboutSection extends React.Component<{}, AboutSectionState> {
	private viewModel: AboutViewModel;
	constructor(props: {}) {
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
					Camren is a technical leader & software engineer with over 15 years of experience building apps and services in games, media, entertainment, and enterprise.

					<br/><br/>

					She has developed, and led development on, a wide variety of projects including games, mobile apps, webpages, and large enterprise applications;

					<br/><br/>

					You can usually found her staring longingly at the rain out her window, tinkering with a new technology, or running large multi-year projects to completion;


					<br/><br/>
				</div>
			</div>
		)
	}
}
