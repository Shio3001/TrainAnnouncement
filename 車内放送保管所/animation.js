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
var AnimationRoot = /** @class */ (function () {
    function AnimationRoot() {
    }
    return AnimationRoot;
}());
var AnimationCenterText = /** @class */ (function (_super) {
    __extends(AnimationCenterText, _super);
    function AnimationCenterText(text_language1, text_language2) {
        var _this = _super.call(this) || this;
        var canvas = document.getElementById('LCD_CanvasMap');
        _this.ctx = canvas.getContext('2d');
        _this.ctx.textAlign = "center";
        _this.ctx.font = "45px Yu Gothic";
        _this.ctx.fillText(text_language1, 640, 360);
        if (text_language2 !== "") {
            _this.ctx.font = "25px Yu Gothic";
            _this.ctx.fillText(text_language2, 640, 390);
        }
        return _this;
    }
    return AnimationCenterText;
}(AnimationRoot));
var AllDel = /** @class */ (function () {
    function AllDel() {
        var canvas = document.getElementById('LCD_CanvasMap');
        var ctx1 = canvas.getContext('2d');
        ctx1.clearRect(0, 0, 1280, 720);
    }
    return AllDel;
}());
