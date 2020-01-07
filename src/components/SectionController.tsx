import React from "react";
import {Route, Switch, SwitchProps} from "react-router-dom";
import {GamesSection} from "./sections/GamesSection";
import {AboutSection} from "./sections/AboutSection";
import {WorkSection} from "./sections/WorkSection";
import {GameModal} from "./games/GameModal";
import {GameComponent} from "./games/GameComponent";
import {NavigationComponent} from "./NavigationComponent";
import Location from "react-router";

type ModalLocation = { state: { modal: boolean } } & Location;

interface SectionControllerProps {
    location: ModalLocation;
    modal?: boolean;
    state: { modal: boolean };
}

interface SectionControllerState {
    location: ModalLocation;
    previousLocation: ModalLocation;
    modal?: boolean;
}

export class SectionController extends React.Component<SectionControllerProps, SectionControllerState> {
    public state: SectionControllerState = {
        location: this.props.location,
        modal: this.props.modal,
        previousLocation: this.props.location
    };

    public render() {
        const props: SectionControllerProps = this.props;
        const isModal = (
            props.location.state &&
            props.location.state.modal); // not initial render

        // location={isModal ? this.state.previousLocation : location}
        return (
            <div className={'Main'}>
                <NavigationComponent/>
                <Switch>
                    <Route exact path='/' component={AboutSection}/>
                    <Route path='/games' component={GamesSection}/>
                    <Route path='/game/:game_id' component={isModal ? GamesSection : GameComponent}/>
                    <Route path='/work' component={WorkSection}/>
                    <Route path='/about' component={AboutSection}/>
                </Switch>
                {isModal ? <Route path="/game/:game_id" component={GameModal}/> : null}
            </div>
        );
    }

    public componentWillUpdate(nextProps) {
        // set previousLocation if props.location is not modal
        const notPop: boolean = nextProps.history.action !== "POP";
        const notModal: boolean = (!this.props.location.state || !this.props.location.state.modal);
        if (notPop && notModal) {
            this.state.previousLocation = this.props.location;
        }
    }
}
