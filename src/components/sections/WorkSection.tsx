import React from 'react';
import {JobModel, JobsViewModel} from "../../viewmodel/JobsViewModel";

interface WorkSectionState {
	jobs: JobModel[];
	platforms: JobModel[];
	projects: JobModel[];
	tech: JobModel[];
}

export class WorkSection extends React.Component<{}, WorkSectionState> {
	private viewModel: JobsViewModel;
	constructor(props: {}) {
		super(props);

		this.viewModel = new JobsViewModel();

		this.state = {
			jobs: [],
			platforms: [],
			projects: [],
			tech: []
		}
	}

	public componentDidMount() {
		this.viewModel.getJobsStream().subscribe((jobs) => {
			this.setState({jobs});
		});

		this.viewModel.getProjectsStream().subscribe((projects) => {
			this.setState({projects})
		});

		this.viewModel.getPlatformStream().subscribe((platforms) => {
			this.setState({platforms});
		});

		this.viewModel.getTechStream().subscribe((tech) => {
			this.setState({tech});
		});
	}

	private renderCategory(title: string, items: JobModel[]) {
		return (
			<div className="WorkCategory">
				<div className='GamesHeader'>{title}</div>
				<div className='WorkGrid'>
					{items.map((item, index) => (
						<div className="WorkCard" key={index}>
							<div className="WorkCard-imgWrap">
								<img className="WorkCard-img" src={item.image} alt={item.name}/>
							</div>
							<span className="WorkCard-label">{item.name}</span>
						</div>
					))}
				</div>
			</div>
		);
	}

	public render() {
		return (
			<div className={"Section"}>
				{this.renderCategory("Companies", this.state.jobs)}
				{this.renderCategory("Projects", this.state.projects)}
				{this.renderCategory("Platforms", this.state.platforms)}
				{this.renderCategory("Technologies", this.state.tech)}
			</div>
		);
	}
}
