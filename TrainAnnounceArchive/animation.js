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
var width_size = document.documentElement.clientWidth;
var hight_size = document.documentElement.clientHeight;
var Main_LCD_body = document.getElementById("LCD");
Main_LCD_body.style.position = "relative";
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
    WhileMovLoop.prototype.start = function () {
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
        var text_language1Element = document.createElement("p"); // p要素作成
        var text_language1Content = document.createTextNode(this.text_language1); // テキストノードを作成
        text_language1Element.appendChild(text_language1Content); // p要素にテキストノードを追加
        text_language1Element.setAttribute("id", "text_language1" + this.text_language1); // p要素にidを設定
        var text_language2Element = document.createElement("p"); // p要素作成
        var text_language2Content = document.createTextNode(this.text_language2); // テキストノードを作成
        text_language2Element.appendChild(text_language2Content); // p要素にテキストノードを追加
        text_language2Element.setAttribute("id", "text_language2" + this.text_language2); // p要素にidを設定
        text_language1Element.style.fontSize = "50px";
        text_language2Element.style.fontSize = "30px";
        text_language1Element.style.fontFamily = "Yu Gothic";
        text_language2Element.style.fontFamily = "Yu Gothic";
        //text_language1Element.style.textAlign = "center";
        //text_language2Element.style.textAlign = "center";
        text_language1Element.style.position = "fixed";
        text_language2Element.style.position = "fixed";
        var LCD_body = document.getElementById("LCD");
        LCD_body.appendChild(text_language1Element);
        LCD_body.appendChild(text_language2Element);
        var text_1px_x = ((width_size / 2) - (text_language1Element.clientWidth / 2));
        var text_2px_x = ((width_size / 2) - (text_language2Element.clientWidth / 2));
        //text_language1Element.style.left =  text_1px_x + "px";
        //text_language2Element.style.left =  text_2px_x + "px";
        console.log(text_1px_x);
        console.log(text_2px_x);
        var text_1px_y = ((hight_size / 2) - (text_language1Element.clientHeight / 2)) - 70;
        var text_2px_y = ((hight_size / 2) - (text_language2Element.clientHeight / 2));
        //text_language1Element.style.top =  text_1px_y + "px";
        //text_language2Element.style.top =  text_2px_y + "px";
        console.log(text_1px_y);
        console.log(text_2px_y);
        //text_language1Element.className = "text_language1Element_sta";
        //text_language1Element.className = "text_language1Element_end";
        //text_language1Element.classList.add("text_language1Element_sta")
        text_language1Element.style.setProperty('--left_pos_A', text_1px_x - 200 + "px");
        text_language1Element.style.setProperty('--left_pos_B', text_1px_x + "px");
        text_language1Element.style.setProperty('--top_pos_A', text_1px_y + "px");
        text_language1Element.style.setProperty('--top_pos_B', text_1px_y - (hight_size * 0.3) + "px");
        text_language1Element.style.setProperty('--time', "2s");
        text_language1Element.classList.add("text_languageElement_sta");
        //(´・ω・`)
        text_language2Element.style.setProperty('--left_pos_A', text_2px_x - 100 + "px");
        text_language2Element.style.setProperty('--left_pos_B', text_2px_x + "px");
        text_language2Element.style.setProperty('--top_pos_A', text_2px_y + "px");
        text_language2Element.style.setProperty('--top_pos_B', text_2px_y - (hight_size * 0.3) + "px");
        text_language2Element.style.setProperty('--time', "3s");
        text_language2Element.classList.add("text_languageElement_sta");
    };
    AnimationCenterText.prototype.del = function () {
        var text_language1 = document.getElementById("text_language1" + this.text_language1);
        text_language1.remove();
        var text_language2 = document.getElementById("text_language2" + this.text_language2);
        text_language2.remove();
    };
    return AnimationCenterText;
}(AnimationRoot));
//https://qiita.com/takahiro_itazuri/items/559427278f315ed119fe
