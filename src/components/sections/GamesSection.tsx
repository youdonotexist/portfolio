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
					<div className="GamesHeader">Prototypes</div>
					<StuffGrid data="jam"/>
				</div>
			</div>
		);
	}
}
