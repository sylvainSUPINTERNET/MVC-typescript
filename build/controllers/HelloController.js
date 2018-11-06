'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = require("./Controller");
var HelloController = /** @class */ (function (_super) {
    __extends(HelloController, _super);
    function HelloController() {
        var _this = this;
        {
            _this = _super.call(this) || this;
        }
        return _this;
    }
    HelloController.test = function () {
        return Controller_1.Controller.hey();
    };
    HelloController.prototype.getControllerName = function () {
        return new HelloController().constructor.name;
    };
    HelloController.prototype.getTest = function () {
        var str = '123';
        var str2 = str;
        var str3 = str;
        var list = [1, 2, 3];
        return list;
    };
    return HelloController;
}(Controller_1.Controller));
exports.HelloController = HelloController;
