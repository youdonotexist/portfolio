import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TxtIcon from "../../assets/txt.png";
import GithubIcon from "../../assets/github.png";

class ProjectGridItem extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}


	render() {
		return (
			<Link className="Grid-Item" to={{pathname: '/game/' + this.props.id, state: {modal: true}}}>
				<div> {this.props.title} </div>
				<div >
					<a style={{display: 'inline-block', padding: '5px'}} target='_blank' href={this.props.readme}>
						<img className="Game-Icon" src={TxtIcon} alt="Description"/>
					</a>
					<a style={{display: 'inline-block', padding: '5px'}} target='_blank' href={this.props.source}>
						<img className="Game-Icon" src={GithubIcon} alt="Source"/>
					</a>
				</div>

			</Link>
		)
	}
}

export default ProjectGridItem;