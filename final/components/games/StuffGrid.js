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
import React, { Component } from 'react';
import ProjectGridItem from "./ProjectGridItem";
import GamesViewModel from "../../viewmodel/GamesViewModel";
var StuffGrid = /** @class */ (function (_super) {
    __extends(StuffGrid, _super);
    function StuffGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.viewModel = new GamesViewModel();
        _this.state = {
            projects: []
        };
        return _this;
    }
    StuffGrid.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.data === 'jam') {
            this.viewModel.getJamGames().subscribe(function (games) {
                _this.setState({ projects: games });
            });
        }
        else if (this.props.data === 'released') {
            this.viewModel.getReleasedGames().subscribe(function (games) {
                _this.setState({ projects: games });
            });
        }
    };
    StuffGrid.prototype.render = function () {
        return (React.createElement("div", { className: "Grid" }, this.state.projects.map(function (item, index) {
            return React.createElement(ProjectGridItem, { key: index, image: item.image, title: item.title, readme: item.readme, source: item.source, id: item.id });
        })));
    };
    return StuffGrid;
}(Component));
export default StuffGrid;
//# sourceMappingURL=StuffGrid.js.map