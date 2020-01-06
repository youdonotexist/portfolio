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
var ProjectGridItem = /** @class */ (function (_super) {
    __extends(ProjectGridItem, _super);
    function ProjectGridItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ProjectGridItem.prototype.render = function () {
        return (React.createElement(Link, { className: "Grid-Item", to: { pathname: '/game/' + this.props.id, context: { modal: true } } },
            React.createElement("div", null,
                " ",
                this.props.title,
                " ")));
    };
    return ProjectGridItem;
}(Component));
export default ProjectGridItem;
//# sourceMappingURL=ProjectGridItem.js.map