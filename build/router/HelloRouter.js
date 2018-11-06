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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Express
var express_1 = require("express");
//Controller
var helloController_1 = require("../controllers/helloController");
var myLog_1 = require("./decorateurs/myLog");
var HelloRouter = /** @class */ (function (_super) {
    __extends(HelloRouter, _super);
    function HelloRouter() {
        var _this = _super.call(this) || this;
        _this.router = express_1.Router();
        return _this;
    }
    /**
     * METHOD : GET
     * PREFIX : /hello
     * PATH : /
     * ROUTE_NAME: index
     * DESCRIPTION: Return index from HelloRouter.
     */
    HelloRouter.prototype.index = function () {
        this
            .router
            .get('/', function (req, res) {
            var helloCtrlData = helloController_1.HelloController.test();
            var mainCtrlData = helloController_1.HelloController.hey();
            res.status(200).json({
                "message_helloCtrl": helloCtrlData,
                "message_mainCtrl": mainCtrlData,
                "path": '/'
            });
        });
        return this.router;
    };
    /**
     * METHOD : GET
     * PREFIX : /hello
     * PATH : /list
     * ROUTE_NAME: index
     * DESCRIPTION: Return index from HelloRouter.
     */
    HelloRouter.prototype.list = function () {
        this
            .router
            .get('/list', function (req, res) {
            var helloCtrlData = helloController_1.HelloController.test();
            var mainCtrlData = helloController_1.HelloController.hey();
            res.status(200).json({
                "message_helloCtrl": helloCtrlData,
                "message_mainCtrl": mainCtrlData,
                "path": '/list'
            });
        });
        return this.router;
    };
    __decorate([
        myLog_1.myLog()
    ], HelloRouter.prototype, "index", null);
    return HelloRouter;
}(helloController_1.HelloController));
exports.HelloRoutes = new HelloRouter();
