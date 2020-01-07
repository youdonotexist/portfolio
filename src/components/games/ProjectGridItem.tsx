import React from 'react';
import {Link, LinkProps} from "react-router-dom";

interface ProjectGridItemProps {
	title: string;
	id: string;
	readme: string;
	source: string;
}

export class ProjectGridItem extends React.Component<ProjectGridItemProps> {

	constructor(props) {
		super(props);

		this.state = {};
	}



	public render() {
		return (
			<Link className="Grid-Item" to={{pathname: '/game/' + this.props.id, state: {modal: true}}}>
				<div> {this.props.title} </div>
			</Link>
		)
	}
}