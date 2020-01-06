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
import JobsViewModel from "../../viewmodel/JobsViewModel";
var WorkSection = /** @class */ (function (_super) {
    __extends(WorkSection, _super);
    function WorkSection(props) {
        var _this = _super.call(this, props) || this;
        _this.viewModel = new JobsViewModel();
        _this.state = {
            jobs: [],
            platforms: [],
            projects: [],
            tech: []
        };
        return _this;
    }
    WorkSection.prototype.componentDidMount = function () {
        var _this = this;
        this.viewModel.getJobsStream().subscribe(function (jobs) {
            _this.setState({ jobs: jobs });
        });
        this.viewModel.getProjectsStream().subscribe(function (projects) {
            _this.setState({ projects: projects });
        });
        this.viewModel.getPlatformStream().subscribe(function (platforms) {
            _this.setState({ platforms: platforms });
        });
        this.viewModel.getTechStream().subscribe(function (tech) {
            _this.setState({ tech: tech });
        });
    };
    WorkSection.prototype.render = function () {
        return (React.createElement("div", { className: "Section" },
            React.createElement("div", { className: 'GamesHeader' }, " Companies"),
            React.createElement("div", { className: 'CompanyRow' }, this.state.jobs.map(function (item, index) {
                return (React.createElement("img", { className: "WorkImage", key: index, src: item.image, alt: item.name }));
            })),
            React.createElement("div", { className: 'GamesHeader' }, " Projects"),
            React.createElement("div", { className: 'CompanyRow' }, this.state.projects.map(function (item, index) {
                return (React.createElement("img", { className: "WorkImage", key: index, src: item.image, alt: item.name }));
            })),
            React.createElement("div", { className: 'GamesHeader' }, " Platforms"),
            React.createElement("div", { className: 'CompanyRow' }, this.state.platforms.map(function (item, index) {
                return (React.createElement("img", { className: "WorkImage", key: index, src: item.image, alt: item.name }));
            })),
            React.createElement("div", { className: 'GamesHeader' }, " Technologies"),
            React.createElement("div", { className: 'CompanyRow' }, this.state.tech.map(function (item, index) {
                return (React.createElement("img", { className: "WorkImage", key: index, src: item.image, alt: item.name }));
            }))));
    };
    return WorkSection;
}(Component));
WorkSection.propTypes = {};
export default WorkSection;
//# sourceMappingURL=WorkSection.js.map