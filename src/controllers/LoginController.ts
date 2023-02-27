import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";

function logger(req:Request, res:Response, next:NextFunction):void{
    console.log('request was made');
    next()
}
 
@controller('/auth')
class LoginController {
    @get('/login') 
    @use(logger)
    getLogin(req: Request, res: Response):void{
        res.status(200).send({
            message: 'login controller'
        })
    }
}