var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import { Route, Switch } from "react-router-dom";
import GamesSection from "./sections/GamesSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import GameModal from "./games/GameModal";
import { GameComponent } from "./games/GameComponent";
import NavigationComponent from "./NavigationComponent";
var SectionController = /** @class */ (function (_super) {
    __extends(SectionController, _super);
    function SectionController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            location: _this.props.location,
            modal: _this.props.modal,
            previousLocation: _this.props.location
        };
        return _this;
    }
    SectionController.prototype.render = function () {
        var props = this.props;
        var isModal = (props.location.context &&
            props.location.context.modal); // not initial render
        // location={isModal ? this.state.previousLocation : location}
        return (React.createElement("div", { className: 'Main' },
            React.createElement(NavigationComponent, null),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: '/', component: AboutSection }),
                React.createElement(Route, { path: '/games', component: GamesSection }),
                React.createElement(Route, { path: '/game/:game_id', component: GameComponent }),
                React.createElement(Route, { path: '/work', component: WorkSection }),
                React.createElement(Route, { path: '/about', component: AboutSection })),
            isModal ? React.createElement(Route, { path: "/game/:game_id", component: GameModal }) : null));
    };
    SectionController.prototype.componentWillUpdate = function (nextProps) {
        // set previousLocation if props.location is not modal
        var notPop = nextProps.history.action !== "POP";
        var notModal = (!this.props.location.context || !this.props.location.context.modal);
        if (notPop && notModal) {
            this.state.previousLocation = this.props.location;
        }
    };
    return SectionController;
}(React.Component));
export { SectionController };
//# sourceMappingURL=SectionController.js.map