import { Request, Response } from "express";
import { controller, get } from "./decorators";

@controller('')
export class RootController {

    @get('/')
    getMessage(req:Request, res:Response){
        res.send({
            message:'hello'
        })
    }
}