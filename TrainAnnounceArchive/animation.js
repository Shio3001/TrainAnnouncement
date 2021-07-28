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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var AnimationRoot = /** @class */ (function () {
    function AnimationRoot() {
    }
    return AnimationRoot;
}());
var WhileLoop = /** @class */ (function () {
    function WhileLoop(send_class, send_section_time) {
        if (send_section_time === void 0) { send_section_time = 100; }
        this.flag = true;
        this.class_data = send_class;
        this.section_time = send_section_time;
    }
    WhileLoop.prototype.sleep = function (sleep_time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () { resolve(0); }, sleep_time);
                    })];
            });
        });
    };
    WhileLoop.prototype.loop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var point;
            return __generator(this, function (_a) {
                point = 0;
                while (this.flag) {
                    this.class_data.loop(point);
                    point += 10;
                    //await this.sleep(10);
                }
                return [2 /*return*/, 1];
            });
        });
    };
    WhileLoop.prototype.start = function () {
    };
    WhileLoop.prototype.end = function () {
        this.flag = false;
    };
    return WhileLoop;
}());
var StopStation = /** @class */ (function (_super) {
    __extends(StopStation, _super);
    function StopStation(send_delbool, send_stop_list_ja, send_stop_list_en, send_stop_list_num, send_stop_list_color) {
        if (send_stop_list_ja === void 0) { send_stop_list_ja = []; }
        if (send_stop_list_en === void 0) { send_stop_list_en = []; }
        if (send_stop_list_num === void 0) { send_stop_list_num = []; }
        if (send_stop_list_color === void 0) { send_stop_list_color = []; }
        var _this = _super.call(this) || this;
        _this.delbool = true;
        _this.stop_list_ja = [];
        _this.stop_list_en = [];
        _this.stop_list_num = [];
        _this.stop_list_color = [];
        _this.delbool = send_delbool;
        _this.stop_list_ja = send_stop_list_ja;
        _this.stop_list_en = send_stop_list_en;
        _this.stop_list_num = send_stop_list_num;
        _this.stop_list_color = send_stop_list_color;
        return _this;
    }
    StopStation.prototype.loop = function (y_plus) {
        if (y_plus === void 0) { y_plus = 0; }
        if (this.delbool) {
            new AllDel();
        }
        var canvas = document.getElementById('LCD_CanvasMap');
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = "#000000";
        var len_ja = stop_list_ja.length;
        var len_en = stop_list_en.length;
        var len_num = this.stop_list_num.length;
        var len_color = this.stop_list_color.length;
        var x_circle = 40;
        var x_base = 100;
        var x_text = 100;
        var y_base = 100 + y_plus;
        var y_one = 100;
        var circle_radius = 40;
        for (var i = 0; i < len_ja; i++) {
            var ja = stop_list_ja[i];
            this.ctx.arc(x_base, y_base, x_circle, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            this.ctx.fillStyle = "#000000";
            this.ctx.textAlign = "left";
            this.ctx.font = "45px Yu Gothic";
            var ja_x = x_base + (x_circle / 2) + 30;
            this.ctx.fillText(ja, ja_x, y_base + 5);
            if (i < len_color) {
                var color = stop_list_en[i];
                this.ctx.fillStyle = color;
            }
            else {
                this.ctx.fillStyle = "#000000";
            }
            this.ctx.fill();
            if (i < len_en) {
                var en = stop_list_en[i];
                this.ctx.fillStyle = "#000000";
                this.ctx.textAlign = "left";
                this.ctx.font = "25px Yu Gothic";
                var en_x = x_base + (x_circle / 2) + 35;
                this.ctx.fillText(en, en_x, y_base + 35);
            }
            if (i < len_num) {
                var num = stop_list_en[i];
                this.ctx.font = "25px Yu Gothic";
                this.ctx.textAlign = "center";
                this.ctx.fillStyle = "#ffffff";
                this.ctx.fillText(num, x_base, y_base);
            }
            y_base += y_one;
        }
    };
    return StopStation;
}(AnimationRoot));
var TrainSecond = /** @class */ (function (_super) {
    __extends(TrainSecond, _super);
    function TrainSecond(delbool, A_language1, B_language1, A_language2, B_language2, x, y, TYPE, type_color) {
        if (x === void 0) { x = 640; }
        if (y === void 0) { y = 360; }
        if (TYPE === void 0) { TYPE = "A"; }
        if (type_color === void 0) { type_color = "#000000"; }
        var _this = this;
        var d_color = "#000000";
        _this = _super.call(this) || this;
        if (delbool) {
            new AllDel();
        }
        var canvas = document.getElementById('LCD_CanvasMap');
        _this.ctx = canvas.getContext('2d');
        _this.ctx.fillStyle = "#000000";
        _this.ctx.font = "45px Yu Gothic";
        _this.ctx.textAlign = "center";
        var A_language1_textWidth = _this.ctx.measureText(A_language1).width;
        var B_language1_textWidth = _this.ctx.measureText(B_language1).width;
        var A_language1_X = x - (A_language1_textWidth / 2) - 20;
        var B_language1_X = x + (B_language1_textWidth / 2) + 20;
        if (TYPE === "A") {
            _this.ctx.fillStyle = type_color;
        }
        else {
            _this.ctx.fillStyle = d_color;
        }
        _this.ctx.fillText(A_language1, A_language1_X, y);
        if (TYPE === "B") {
            _this.ctx.fillStyle = type_color;
        }
        else {
            _this.ctx.fillStyle = d_color;
        }
        _this.ctx.fillText(B_language1, B_language1_X, y);
        _this.ctx.font = "25px Yu Gothic";
        var A_language2_textWidth = _this.ctx.measureText(A_language2).width;
        var B_language2_textWidth = _this.ctx.measureText(B_language2).width;
        if (TYPE === "A") {
            _this.ctx.fillStyle = type_color;
        }
        else {
            _this.ctx.fillStyle = d_color;
        }
        _this.ctx.fillText(A_language2, A_language1_X, y + 30);
        if (TYPE === "B") {
            _this.ctx.fillStyle = type_color;
        }
        else {
            _this.ctx.fillStyle = d_color;
        }
        _this.ctx.fillText(B_language2, B_language1_X, y + 30);
        return _this;
    }
    return TrainSecond;
}(AnimationRoot));
var AnimationCenterText = /** @class */ (function (_super) {
    __extends(AnimationCenterText, _super);
    function AnimationCenterText(delbool, text_language1, text_language2, x, y) {
        if (x === void 0) { x = 640; }
        if (y === void 0) { y = 360; }
        var _this = _super.call(this) || this;
        if (delbool) {
            new AllDel();
        }
        var canvas = document.getElementById('LCD_CanvasMap');
        _this.ctx = canvas.getContext('2d');
        _this.ctx.fillStyle = "#000000";
        _this.ctx.textAlign = "center";
        _this.ctx.font = "45px Yu Gothic";
        _this.ctx.fillText(text_language1, x, y);
        if (text_language2 !== "") {
            _this.ctx.font = "25px Yu Gothic";
            _this.ctx.fillText(text_language2, x, y + 30);
        }
        return _this;
    }
    return AnimationCenterText;
}(AnimationRoot));
var AllDel = /** @class */ (function () {
    function AllDel() {
        var canvas = document.getElementById('LCD_CanvasMap');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 1280, 720);
        ctx.fillStyle = "#000000";
    }
    return AllDel;
}());
