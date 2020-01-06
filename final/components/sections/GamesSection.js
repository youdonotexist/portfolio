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
import StuffGrid from "../games/StuffGrid";
var GamesSection = /** @class */ (function (_super) {
    __extends(GamesSection, _super);
    function GamesSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamesSection.prototype.render = function () {
        return (React.createElement("div", { className: "Section" },
            React.createElement("div", null,
                React.createElement("div", { className: "GamesHeader" }, "Released"),
                React.createElement(StuffGrid, { data: "released" })),
            React.createElement("div", null,
                React.createElement("div", { className: "GamesHeader" }, "Prototypes"),
                React.createElement(StuffGrid, { data: "jam" }))));
    };
    return GamesSection;
}(Component));
GamesSection.propTypes = {};
export default GamesSection;
//# sourceMappingURL=GamesSection.js.map