import React, {Component} from 'react';
import JobsViewModel from "../../viewmodel/JobsViewModel";

class WorkSection extends Component {

	constructor(props) {
		super(props);

		this.viewModel = new JobsViewModel();

		this.state = {
			jobs: [],
			projects: [],
			platforms: [],
			tech: []
		}
	}

	componentDidMount() {
		this.viewModel.getJobsStream().subscribe((jobs) => {
			this.setState({jobs: jobs});
		});

		this.viewModel.getProjectsStream().subscribe((projects) => {
			this.setState({projects: projects})
		});

		this.viewModel.getPlatformStream().subscribe((platforms) => {
			this.setState({platforms: platforms});
		});

		this.viewModel.getTechStream().subscribe((tech) => {
			this.setState({tech: tech});
		});
	}

	render() {
		return (
			<div className={"Section"}>
				<div className='GamesHeader'> Companies</div>
				<div className='CompanyRow'>
					{this.state.jobs.map(function (item, index) {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>

				<div className='GamesHeader'> Projects</div>
				<div className='CompanyRow'>
					{this.state.projects.map(function (item, index) {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>

				<div className='GamesHeader'> Platforms</div>
				<div className='CompanyRow'>
					{this.state.platforms.map(function (item, index) {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>

				<div className='GamesHeader'> Technologies</div>
				<div className='CompanyRow'>
					{this.state.tech.map(function (item, index) {
						return (
							<img className={"WorkImage"} key={index} src={item.image} alt={item.name}/>
						)
					})}
				</div>
			</div>
		);
	}
}

WorkSection.propTypes = {};

export default WorkSection;
