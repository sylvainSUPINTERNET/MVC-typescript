'use strict';

import {Controller} from "./Controller";


export class HelloController extends Controller {

    constructor() {
        {
            super();
        }
    }

    static test(): string{
        return Controller.hey();
    }


    getControllerName():string{
        return (<any>new HelloController()).constructor.name;
    }


    getTest(){
        let str = '123';
        let str2: number = <number><any>str;
        let str3 = str as any as number;
        let list: Array<number> = [1, 2, 3];
        return list
    }



}

