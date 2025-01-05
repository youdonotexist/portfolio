import React, {Component} from 'react';
import {GamesViewModel, ProjectModel} from "../../viewmodel/GamesViewModel";
import ProjectGridItem from "./ProjectGridItem";

interface StuffGridState {
	projects: ProjectModel[]
}

interface StuffGridProps {
	data: string
}

export class StuffGrid extends Component<StuffGridProps, StuffGridState> {
	private viewModel: GamesViewModel;

	constructor(props: StuffGridProps) {
		super(props);

		this.viewModel = new GamesViewModel();

		this.state = {
			projects: []
		}
	}

	public componentDidMount() {
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

	public render() {
		return (
			<div className="Grid">
				{this.state.projects.map((item, index) => {
					return <ProjectGridItem key={index} title={item.title} readme={item.readme} source={item.source} id={item.id}/>
				})}
			</div>
		);
	}
}