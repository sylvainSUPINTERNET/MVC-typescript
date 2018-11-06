'use strict';



export abstract class Controller{
    constructor(){}

    static hey(): string{
        return "hey from CONTROLLER PARENT";
    }

    abstract getControllerName():string;
}

