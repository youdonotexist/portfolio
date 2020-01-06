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
import { GameComponent } from "./GameComponent";
var GameModal = /** @class */ (function (_super) {
    __extends(GameModal, _super);
    function GameModal(props) {
        var _this = _super.call(this, props) || this;
        _this.back = _this.back.bind(_this);
        return _this;
    }
    GameModal.prototype.back = function (e) {
        e.stopPropagation();
        this.props.history.goBack();
    };
    ;
    GameModal.prototype.render = function () {
        var id = this.props.match.params.game_id || "none";
        return (React.createElement("div", { className: "modal-bg" },
            React.createElement("div", { className: "modal" },
                React.createElement("div", null,
                    React.createElement("div", { className: "modal-close-top", onClick: this.back },
                        React.createElement("span", { style: { 'display': 'inline-block', 'verticalAlign': 'middle', 'lineHeight': 'normal' } },
                            React.createElement("div", null, "X")))),
                React.createElement(GameComponent, { id: id, isModal: true }),
                React.createElement("div", { className: "modal-close-bottom", type: "button", onClick: this.back }, "Close"))));
    };
    return GameModal;
}(Component));
GameModal.propTypes = {};
export default GameModal;
//# sourceMappingURL=GameModal.js.map