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
import Carousel from "nuka-carousel";
import GameViewModel from "../../viewmodel/GameViewModel";
import { isMobile } from "react-device-detect";
import GithubIcon from "../../assets/github.png";
import TxtIcon from "../../assets/txt.png";
var GameComponent = /** @class */ (function (_super) {
    __extends(GameComponent, _super);
    function GameComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { game: GameViewModel.emptyGame() };
        _this.carouselRef = React.createRef();
        _this.loaded = false;
        _this.viewModel = new GameViewModel();
        _this.handleLoadImage.bind(_this);
        return _this;
    }
    GameComponent.prototype.componentDidMount = function () {
        var _this = this;
        var hasGameId = this.props.match ? this.props.match.params.game_id : "";
        var id = this.props.id || hasGameId;
        var stream = this.viewModel.getData(id);
        var observer = {
            complete: function () {
                _this.loaded = true;
            },
            error: function (err) {
                _this.setState(null);
            },
            next: function (game) {
                _this.setState({ game: game });
            }
        };
        stream.subscribe(observer);
    };
    GameComponent.prototype.render = function () {
        return (React.createElement("div", { className: this.props.isModal ? "Game-Modal" : "Game" },
            React.createElement("h3", null, this.state.game.title),
            this.showCarousel(this.state.game.images),
            React.createElement("div", { className: "Game-Links" },
                React.createElement("a", { style: { display: 'inline-block' }, target: '_blank', href: this.state.game.readme },
                    React.createElement("img", { className: "Game-Icon", src: TxtIcon, alt: "Readme" }),
                    React.createElement("div", { style: { display: 'block' } }, "Readme")),
                React.createElement("a", { style: { display: 'inline-block' }, target: '_blank', href: this.state.game.source },
                    React.createElement("img", { className: "Game-Icon", src: GithubIcon, alt: "Source" }),
                    React.createElement("div", { style: { display: 'block' } }, "Source")))));
    };
    GameComponent.prototype.handleLoadImage = function () {
        if (this.carouselRef.current) {
            // @ts-ignore
            this.carouselRef.current.setDimensions();
        }
    };
    GameComponent.prototype.showCarousel = function (hasImages) {
        var _this = this;
        var game = this.state.game;
        if (hasImages) {
            return React.createElement(Carousel, { className: 'Game-Carousel', ref: this.carouselRef, heightMode: 'max', withoutControls: isMobile }, game.images.map(function (image, index) {
                _this.buildImage(image, index);
            }));
        }
        else {
            return React.createElement("div", null);
        }
    };
    GameComponent.prototype.buildImage = function (image, index) {
        return React.createElement("img", { style: { height: 'auto', width: '100%' }, key: index, onLoad: this.handleLoadImage, src: image, alt: "game shot" });
    };
    return GameComponent;
}(React.Component));
export { GameComponent };
//# sourceMappingURL=GameComponent.js.map