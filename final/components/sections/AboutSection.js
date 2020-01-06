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
import { AboutViewModel } from "../../viewmodel/AboutViewModel";
var AboutSection = /** @class */ (function (_super) {
    __extends(AboutSection, _super);
    function AboutSection(props) {
        var _this = _super.call(this, props) || this;
        _this.viewModel = new AboutViewModel();
        _this.state = {
            socialMediaItems: []
        };
        return _this;
    }
    AboutSection.prototype.componentDidMount = function () {
        var component = this;
        this.viewModel.getData().subscribe(function (items) {
            component.setState({ 'socialMediaItems': items });
        });
    };
    AboutSection.prototype.render = function () {
        return (React.createElement("div", { className: "Section" },
            React.createElement("div", { className: "Header-logos-container" }, this.state.socialMediaItems.map(function (obj, index) {
                return React.createElement("a", { key: index, href: obj.url, target: "_blank", className: "Header-logos" },
                    " ",
                    React.createElement("img", { alt: obj.url, className: "Header-logos-img", src: obj.icon }),
                    " ");
            })),
            React.createElement("div", { className: "About-txt" },
                "Camren is a software engineer with over 10 years of experience building various things.",
                React.createElement("br", null),
                React.createElement("br", null),
                "Such various things include technologies such as iOS, Android, Unity, and now, Web.",
                React.createElement("br", null),
                React.createElement("br", null))));
    };
    return AboutSection;
}(React.Component));
AboutSection.propTypes = {};
export default AboutSection;
//# sourceMappingURL=AboutSection.js.map