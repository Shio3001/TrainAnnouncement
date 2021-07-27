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
var AnnounceRoot = /** @class */ (function () {
    function AnnounceRoot(wav, send_start_hour, send_start_min) {
        this.time_loop_bool = true;
        this.start_hour = send_start_hour;
        this.start_min = send_start_min;
    }
    AnnounceRoot.prototype.time_loop = function () {
        while (this.time_loop_bool) {
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var second = date.getSeconds();
            if (this.start_hour == hour && this.start_min == min) {
                console.log("aaaaaaaaaaaaa");
            }
        }
        return;
    };
    return AnnounceRoot;
}());
var AnnounceArrival = /** @class */ (function (_super) {
    __extends(AnnounceArrival, _super);
    function AnnounceArrival(send_wav, send_start_hour, send_start_min) {
        return _super.call(this, send_wav, send_start_hour, send_start_min) || this;
    }
    return AnnounceArrival;
}(AnnounceRoot));
var AnnounceDeparture = /** @class */ (function (_super) {
    __extends(AnnounceDeparture, _super);
    function AnnounceDeparture(send_wav, send_start_hour, send_start_min) {
        return _super.call(this, send_wav, send_start_hour, send_start_min) || this;
    }
    return AnnounceDeparture;
}(AnnounceRoot));
var AnnounceStop = /** @class */ (function (_super) {
    __extends(AnnounceStop, _super);
    function AnnounceStop(send_wav, send_start_hour, send_start_min) {
        return _super.call(this, send_wav, send_start_hour, send_start_min) || this;
    }
    return AnnounceStop;
}(AnnounceRoot));
var AnnounceRun = /** @class */ (function (_super) {
    __extends(AnnounceRun, _super);
    function AnnounceRun(send_wav, send_start_hour, send_start_min) {
        return _super.call(this, send_wav, send_start_hour, send_start_min) || this;
    }
    return AnnounceRun;
}(AnnounceRoot));
