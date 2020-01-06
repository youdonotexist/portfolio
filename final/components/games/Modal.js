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
import React from 'react';
import PropTypes from 'prop-types';
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        // The gray background
        var backdropStyle = {
            backgroundColor: 'rgba(0,0,0,0.3)',
            left: '50%',
            margin: '0 auto',
            position: 'absolute',
            top: '50%',
        };
        // The modal "window"
        var modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            margin: '0 auto',
            padding: 30
        };
        return (React.createElement("div", { className: "backdrop", style: { backdropStyle: backdropStyle } },
            React.createElement("div", { className: "modal", style: { modalStyle: modalStyle } },
                this.props.children,
                React.createElement("div", { className: "footer" },
                    React.createElement("button", { onClick: this.props.onClose }, "Close")))));
    };
    return Modal;
}(React.Component));
Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool
};
export default Modal;
//# sourceMappingURL=Modal.js.map