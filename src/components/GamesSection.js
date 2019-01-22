import React, {Component} from 'react';
import StuffGrid from "./StuffGrid";

class GamesSection extends Component {
	render() {
		return (
			<div className={"Section"}>
				<div>
					<div class="GamesHeader">Released</div>
					<StuffGrid data="released"/>
				</div>
				<div>
					<div class="GamesHeader"> Game Jams</div>
					<StuffGrid data="jam"/>
				</div>
			</div>
		);
	}
}

GamesSection.propTypes = {};

export default GamesSection;
