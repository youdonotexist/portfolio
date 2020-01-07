import React from 'react';
import {GameComponent, GameMatch, GameProps} from "./GameComponent";
import {RouteChildrenProps} from "react-router";

export class GameModal extends React.Component<GameProps & RouteChildrenProps<GameMatch>> {

    constructor(props) {
        super(props);

        this.back = this.back.bind(this);
    }

    public render() {
        let id = this.props.match && this.props.match.params.game_id;
        if (!id) {
            id = "none";
        }

        return (
            <div className="modal-bg">
                <div className="modal">
                    <div className="modal-close-top-container">
                        <div className="modal-close-top" onClick={this.back}>
						    <span
                                style={{'display': 'inline-block', 'verticalAlign': 'middle', 'lineHeight': 'normal'}}>
							    <div>X</div>
						    </span>
                        </div>
                    </div>
                    <GameComponent id={id} isModal={true} history={this.props.history}
                                   location={this.props.location}
                                   match={this.props.match} children={this.props.children}/>
                    <div className="modal-close-bottom-container">
                        <div className="modal-close-bottom" onClick={this.back}>Close</div>
                    </div>
                </div>
            </div>
        )
    }

    private back(e) {
        e.stopPropagation();
        this.props.history.goBack();
    };
}
