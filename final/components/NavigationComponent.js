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
import { Link } from "react-router-dom";
import HeaderViewModel from "../viewmodel/HeaderViewModel";
var NavigationComponent = /** @class */ (function (_super) {
    __extends(NavigationComponent, _super);
    function NavigationComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.viewModel = new HeaderViewModel();
        _this.state = {
            sections: []
        };
        return _this;
    }
    NavigationComponent.prototype.componentDidMount = function () {
        var component = this;
        this.viewModel.getData().subscribe(function (items) {
            component.setState({ 'sections': items });
        });
    };
    NavigationComponent.prototype.render = function () {
        return (React.createElement("div", { className: "Navigation-Container" },
            React.createElement("div", { className: "Header-sections" }, this.state.sections.map(function (sectionName, index) {
                return (React.createElement(Link, { key: index, to: '/' + sectionName.toLowerCase(), className: "Header-section" },
                    " ",
                    sectionName,
                    " "));
            })),
            React.createElement("div", { style: { height: '100%', float: 'left', width: '1px', color: "black" } })));
    };
    return NavigationComponent;
}(Component));
NavigationComponent.propTypes = {};
export default NavigationComponent;
//# sourceMappingURL=NavigationComponent.js.map