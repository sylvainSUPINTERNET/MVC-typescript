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
//Express
var express_1 = require("express");
//Controller
var hello_controller_1 = require("../controllers/hello.controller");
/*
// Import only what we need from express
import { Router, Request, Response } from 'express';
import {HelloController} from "../controllers/hello.controller";
// Assign router to the express.Router() instance
const router: Router = Router();



// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided

    res.send('Hello, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});

// Export the express.Router() instance to be used by server.ts
export const HelloRouter: Router = router;

*/
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
            res.send(" HelloRouter -> path / ");
        });
    };
    /**
     * Return corresponding controller
     * @returns {e.Router}
     */
    HelloRouter.prototype.getRoutes = function () {
        return this.router;
    };
    return HelloRouter;
}(hello_controller_1.HelloController));
exports.HelloRouter = HelloRouter;
