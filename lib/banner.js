"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
require("./banner.less");
// 图片总数
var TOTAL_NUMBER_OF_IMG = 4;
//单位秒(s)
var TIME_INTERVAL = 2;
var Banner = (function (_super) {
    __extends(Banner, _super);
    function Banner(props) {
        var _this = _super.call(this, props) || this;
        _this._setTimer = function () {
            return setInterval(function () {
                var runningOrder = _this.state.runningOrder;
                if (runningOrder >= TOTAL_NUMBER_OF_IMG - 1) {
                    _this.setState({
                        runningOrder: 0
                    });
                }
                else {
                    runningOrder++;
                    _this.setState({
                        runningOrder: runningOrder
                    });
                }
            }, TIME_INTERVAL * 1000);
        };
        _this._onDot = function (event) {
            var elem = null;
            if (_this.timer) {
                clearInterval(_this.timer);
                _this.timer = null;
            }
            for (var i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
                elem = document.getElementById("" + i);
                if (elem === event.target) {
                    _this.setState({
                        runningOrder: i
                    });
                }
            }
            _this.timer = _this._setTimer();
        };
        _this.state = {
            runningOrder: 0
        };
        return _this;
    }
    Banner.prototype.componentDidMount = function () {
        this.timer = this._setTimer();
    };
    Banner.prototype.componentWillUnmount = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    Banner.prototype._renderImgs = function (runningOrder, imgSourceList) {
        if (imgSourceList === void 0) { imgSourceList = []; }
        var imgsList = [];
        for (var i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            imgsList.push(React.createElement("img", { className: classNames("sx-image-img", { "sx-image-img__active": runningOrder === i }), key: "img" + i, src: imgSourceList[i], alt: "" + i }));
        }
        return imgsList;
    };
    Banner.prototype._renderDots = function (runningOrder) {
        var dotList = [];
        for (var i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            dotList.push(React.createElement("span", { id: "" + i, key: "dot" + i, className: classNames("sx-dot-span", { "sx-dot-span__active": runningOrder === i }) }));
        }
        return dotList;
    };
    Banner.prototype.render = function () {
        var runningOrder = this.state.runningOrder;
        var imgSourceList = this.props.imgSourceList;
        return (React.createElement("div", { className: "sx-banner-wrapper" },
            React.createElement("div", { className: "sx-image" }, this._renderImgs(runningOrder, imgSourceList)),
            React.createElement("div", { className: "sx-dot", onClick: this._onDot }, this._renderDots(runningOrder))));
    };
    Banner.defaultProps = {
        imgSourceList: []
    };
    return Banner;
}(React.Component));
exports.Banner = Banner;
//# sourceMappingURL=banner.js.map