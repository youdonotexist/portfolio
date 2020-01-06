import React from "react";
import {Route, Switch} from "react-router-dom";
import {GamesSection} from "./sections/GamesSection";
import {AboutSection} from "./sections/AboutSection";
import {WorkSection} from "./sections/WorkSection";
import {GameModal} from "./games/GameModal";
import {GameComponent} from "./games/GameComponent";
import {NavigationComponent} from "./NavigationComponent";
import Location from "react-router";


interface SectionControllerProps {
    location: { context: { modal: boolean } } & Location;
    modal?: boolean;
    context: { modal: boolean };
}

interface SectionControllerState {
    location: { context: { modal: boolean } } & Location;
    previousLocation: { context: { modal: boolean } } & Location;
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
            props.location.context &&
            props.location.context.modal); // not initial render

        // location={isModal ? this.state.previousLocation : location}
        return (
            <div className={'Main'}>
                <NavigationComponent/>
                <Switch>
                    <Route exact path='/' component={AboutSection}/>
                    <Route path='/games' component={GamesSection}/>
                    <Route path='/game/:game_id' component={GameComponent}/>
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
        const notModal: boolean = (!this.props.location.context || !this.props.location.context.modal);
        if (notPop && notModal) {
            this.state.previousLocation = this.props.location;
        }
    }
}
