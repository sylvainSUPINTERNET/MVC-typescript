'use strict';

import {Runtime} from "inspector";

export function myLog() {
    console.log("MYLOG DECORATER");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("my log is called");
    }
}