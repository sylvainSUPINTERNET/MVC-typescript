'use strict';

//Express
import {Router, Request, Response} from 'express';

//Controller
import {HelloController} from "../controllers/helloController";
import {myLog} from "./decorateurs/myLog";

class HelloRouter extends HelloController {

    public router: Router = Router();


    constructor() {
        super()
    }

    /**
     * METHOD : GET
     * PREFIX : /hello
     * PATH : /
     * ROUTE_NAME: index
     * DESCRIPTION: Return index from HelloRouter.
     */


    @myLog()
    public index() {
        this
            .router
            .get('/', (req: Request, res: Response) => {
                let helloCtrlData: string = HelloController.test();
                let mainCtrlData: string = HelloController.hey();

                res.status(200).json
                ({
                    "message_helloCtrl": helloCtrlData,
                    "message_mainCtrl": mainCtrlData,
                    "path": '/'
                })
            });

        return this.router;
    }

    /**
     * METHOD : GET
     * PREFIX : /hello
     * PATH : /list
     * ROUTE_NAME: index
     * DESCRIPTION: Return index from HelloRouter.
     */
    public list() {
        this
            .router
            .get('/list', (req: Request, res: Response) => {
                let helloCtrlData: string = HelloController.test();
                let mainCtrlData: string = HelloController.hey();

                res.status(200).json
                ({
                    "message_helloCtrl": helloCtrlData,
                    "message_mainCtrl": mainCtrlData,
                    "path": '/list'
                })
            });

        return this.router;
    }

}






export const HelloRoutes = new HelloRouter();

