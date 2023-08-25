import { Request, Response } from "express";
import Service from "./services";

export default class Controller {
    static signUp = async (req: Request, res: Response) => {
      try {
        let response = await Service.signUp(req);
        await res.send(response);
      } catch (err) {
        await res.status(400).send({
            success: false,
            type: "BAD_REQUEST",
            message: err,
          });
      }
    };
}  