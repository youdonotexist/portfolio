import React from 'react';
import {StuffGrid} from "../games/StuffGrid";

export class GamesSection extends React.Component {
	public render() {
		return (
			<div className={"Section"}>
				<div>
					<div className="GamesHeader">Released</div>
					<StuffGrid data="released"/>
				</div>
				<div>
					<div className="GamesHeader">Unreleased</div>
					<StuffGrid data="unreleased"/>
				</div>
				<div>
					<div className="GamesHeader">Game Jams</div>
					<StuffGrid data="jam"/>
				</div>

			</div>
		);
	}
}
