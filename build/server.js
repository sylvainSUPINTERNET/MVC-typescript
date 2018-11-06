'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
var HelloRouter_1 = require("./router/HelloRouter");
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
var port = 4500;
// Mount the HelloController at the /welcome route
app.use('/hello', HelloRouter_1.HelloRoutes.index());
app.use('/hello', HelloRouter_1.HelloRoutes.list());
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
