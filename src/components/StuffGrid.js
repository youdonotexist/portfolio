import React, {Component} from 'react';
import ProjectGridItem from "./ProjectGridItem";
import GamesViewModel from "../viewmodel/GamesViewModel";

class StuffGrid extends Component {
	constructor(props) {
		super(props);

		this.viewModel = new GamesViewModel();

		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		if (this.props.data === 'jam') {
			this.viewModel.getJamGames().subscribe((games) => {
				this.setState({projects: games});
			})
		}
		else if (this.props.data === 'released') {
			this.viewModel.getReleasedGames().subscribe((games) => {
				this.setState({projects: games});
			})
		}

	}

	render() {
		return (
			<div className="Grid">
				{this.state.projects.map(function (item, index) {
					return <ProjectGridItem key={index} image={item.image} title={item.title} readme={item.readme} source={item.source} id={item.id}/>
				})}
			</div>
		);
	}
}

export default StuffGrid;