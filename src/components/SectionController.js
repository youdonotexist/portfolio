import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Route, Switch} from "react-router-dom";
import GamesSection from "./sections/GamesSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import GameModal from "./games/GameModal";
import Game from "./games/Game";
import NavigationComponent from "./NavigationComponent";

class SectionController extends Component {

	constructor(props) {
		super(props);

		this.previousLocation = this.props.location;

		this.state = {}
	}

	componentWillUpdate(nextProps) {
		const {location} = this.props;
		// set previousLocation if props.location is not modal
		if (
			nextProps.history.action !== "POP" &&
			(!location.state || !location.state.modal)
		) {
			this.previousLocation = this.props.location;
		}
	}

	render() {
		const {location} = this.props;
		const isModal = !!(
			location.state &&
			location.state.modal &&
			this.previousLocation !== location
		); // not initial render

		return (
			<div className={'Main'}>
				<NavigationComponent/>
				<Switch location={isModal ? this.previousLocation : location}>
					<Route exact path='/' component={AboutSection}/>
					<Route path='/games' component={GamesSection}/>
					<Route path='/game/:game_id' component={Game}/>
					<Route path='/work' component={WorkSection}/>
					<Route path='/about' component={AboutSection}/>
				</Switch>
				{isModal ? <Route path="/game/:game_id" component={GameModal}/> : null}
			</div>
		);
	}

	static propTypes = {
		CurrentSection: PropTypes.string
	}
}

SectionController.propTypes = {};


export default SectionController;
