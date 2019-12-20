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
					<div>
						<div className="modal-close-top" onClick={this.back}>
						    <span style={{'display': 'inline-block', 'vertical-align': 'middle', 'line-height': 'normal'}}>
							    <div>X</div>
						    </span>
						</div>
					</div>
					<Game id={id} isModal={true}/>
					<div className="modal-close-bottom" type="button" onClick={this.back}>Close</div>
				</div>
			</div>
		)
	}
}

GameModal.propTypes = {};

export default GameModal;
