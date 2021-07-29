"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
function all_del() {
    var canvas = document.getElementById('LCD_CanvasMap');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0, 0, 1280, 720);
    ctx.fillStyle = "#000000";
}
var AnimationRoot = /** @class */ (function () {
    function AnimationRoot() {
    }
    return AnimationRoot;
}());
var WhileLoop = /** @class */ (function () {
    function WhileLoop(send_class, send_section_time) {
        if (send_section_time === void 0) { send_section_time = 100; }
        this.class_data = send_class;
        this.section_time = send_section_time;
    }
    return WhileLoop;
}());
var WhileMovLoop = /** @class */ (function () {
    function WhileMovLoop(send_class, send_section_time) {
        if (send_section_time === void 0) { send_section_time = 100; }
        this.flag = true;
        this.class_data = send_class;
        this.section_time = send_section_time;
    }
    WhileMovLoop.prototype.sleep = function (sleep_time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () { resolve(0); }, sleep_time);
                    })];
            });
        });
    };
    WhileMovLoop.prototype.loop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var point;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        point = 0;
                        _a.label = 1;
                    case 1:
                        if (!this.flag) return [3 /*break*/, 3];
                        point -= 20;
                        return [4 /*yield*/, this.sleep(200)];
                    case 2:
                        _a.sent();
                        all_del();
                        this.class_data.main(point);
                        console.log(point);
                        if (-2420 > point) {
                            return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, 1];
                }
            });
        });
    };
    WhileMovLoop.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loop()];
                    case 1:
                        _a.sent();
                        console.log("にゃーん");
                        return [2 /*return*/];
                }
            });
        });
    };
    WhileMovLoop.prototype.end = function () {
        this.flag = false;
    };
    return WhileMovLoop;
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
    StopStation.prototype.main = function (y_plus) {
        if (y_plus === void 0) { y_plus = 0; }
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
        var y_base = 720 + y_plus;
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
        var _this = _super.call(this) || this;
        _this.delbool = true;
        _this.delbool = delbool;
        _this.A_language1 = A_language1;
        _this.B_language1 = B_language1;
        _this.A_language2 = A_language2;
        _this.B_language2 = B_language2;
        _this.x = x;
        _this.y = y;
        _this.TYPE = TYPE;
        _this.type_color = type_color;
        return _this;
    }
    TrainSecond.prototype.main = function () {
        var d_color = "#000000";
        if (this.delbool) {
            all_del();
        }
        var canvas = document.getElementById('LCD_CanvasMap');
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "45px Yu Gothic";
        this.ctx.textAlign = "center";
        var A_language1_textWidth = this.ctx.measureText(this.A_language1).width;
        var B_language1_textWidth = this.ctx.measureText(this.B_language1).width;
        var A_language1_X = this.x - (A_language1_textWidth / 2) - 20;
        var B_language1_X = this.x + (B_language1_textWidth / 2) + 20;
        if (this.TYPE === "A") {
            this.ctx.fillStyle = this.type_color;
        }
        else {
            this.ctx.fillStyle = d_color;
        }
        this.ctx.fillText(this.A_language1, A_language1_X, this.y);
        if (this.TYPE === "B") {
            this.ctx.fillStyle = this.type_color;
        }
        else {
            this.ctx.fillStyle = d_color;
        }
        this.ctx.fillText(this.B_language1, B_language1_X, this.y);
        this.ctx.font = "25px Yu Gothic";
        var A_language2_textWidth = this.ctx.measureText(this.A_language2).width;
        var B_language2_textWidth = this.ctx.measureText(this.B_language2).width;
        if (this.TYPE === "A") {
            this.ctx.fillStyle = this.type_color;
        }
        else {
            this.ctx.fillStyle = d_color;
        }
        this.ctx.fillText(this.A_language2, A_language1_X, this.y + 30);
        if (this.TYPE === "B") {
            this.ctx.fillStyle = this.type_color;
        }
        else {
            this.ctx.fillStyle = d_color;
        }
        this.ctx.fillText(this.B_language2, B_language1_X, this.y + 30);
    };
    return TrainSecond;
}(AnimationRoot));
var AnimationCenterText = /** @class */ (function (_super) {
    __extends(AnimationCenterText, _super);
    function AnimationCenterText(delbool, text_language1, text_language2, x, y) {
        if (x === void 0) { x = 640; }
        if (y === void 0) { y = 360; }
        var _this = _super.call(this) || this;
        _this.delbool = delbool;
        _this.text_language1 = text_language1;
        _this.text_language2 = text_language2;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    AnimationCenterText.prototype.main = function () {
        if (this.delbool) {
            all_del();
        }
        var canvas = document.getElementById('LCD_CanvasMap');
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = "#000000";
        this.ctx.textAlign = "center";
        this.ctx.font = "45px Yu Gothic";
        this.ctx.fillText(this.text_language1, this.x, this.y);
        if (this.text_language2 !== "") {
            this.ctx.font = "25px Yu Gothic";
            this.ctx.fillText(this.text_language2, this.x, this.y + 30);
        }
    };
    return AnimationCenterText;
}(AnimationRoot));
