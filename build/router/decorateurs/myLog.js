'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function myLog() {
    console.log("MYLOG DECORATER");
    return function (target, propertyKey, descriptor) {
        console.log("my log is called");
    };
}
exports.myLog = myLog;
