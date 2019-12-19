import React, {Component} from 'react';
import JobsViewModel from "../../viewmodel/JobsViewModel";

class WorkSection extends Component {

	constructor(props) {
		super(props);

		this.viewModel = new JobsViewModel();

		this.state = {
			jobs: []
		}
	}

	componentDidMount() {
		this.viewModel.getJobsStream().subscribe((jobs) => {
			this.setState({jobs: jobs});
		})


	}

	render() {
		debugger;
		return (
			<div className="Grid">
				{this.state.jobs.map(function (item, index) {
					return(
					<span>
						<img src={item.image}/>
					</span>
					)
				})}
			</div>
		);
	}
}

WorkSection.propTypes = {};

export default WorkSection;
