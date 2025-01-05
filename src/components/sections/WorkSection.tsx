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

	public render() {
		return (
			<div className={"Section"}>
				<div className='GamesHeader'> Companies</div>
				<div className='CompanyRow'>
					{this.state.jobs.map((item, index) => {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>

				<div className='GamesHeader'> Projects</div>
				<div className='CompanyRow'>
					{this.state.projects.map((item, index) => {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>

				<div className='GamesHeader'> Platforms</div>
				<div className='CompanyRow'>
					{this.state.platforms.map((item, index) => {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>

				<div className='GamesHeader'> Technologies</div>
				<div className='CompanyRow'>
					{this.state.tech.map((item, index) => {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>
			</div>
		);
	}
}
