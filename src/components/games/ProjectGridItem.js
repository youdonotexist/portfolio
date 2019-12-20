import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProjectGridItem extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}


	render() {
		return (
			<Link className="Grid-Item" to={{pathname: '/game/' + this.props.id, state: {modal: true}}}>
				<div> {this.props.title} </div>
			</Link>
		)
	}
}

export default ProjectGridItem;