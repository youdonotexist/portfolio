import React, {Component} from 'react';
import Game from "./Game";

class GameModal extends Component {

	constructor(props) {
		super(props);

		this.back = this.back.bind(this);
	}

	componentDidMount() {

	}

	back(e) {
		e.stopPropagation();
		this.props.history.goBack();
	};

	render() {
		var id = this.props.match.params.game_id || "none";

		return (
			<div className="modal-bg">
				<div className="modal">
					<Game id={id} isModal={true}/>
					<button type="button" onClick={this.back}>Close</button>
				</div>
			</div>
		)
	}
}

GameModal.propTypes = {};

export default GameModal;
