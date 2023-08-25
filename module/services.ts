import { Request, Response } from "express";
import * as Model from "../models/index";
import Common from "./common";

export default class Service {
  static signUp = async (req: any) => {
    try {
      let { name, email, password } = req.body;

      let query = { email: email.toLowerCase().trim() };
      let get_user: any = await Model.User.find(
        query,
        { __v: 0 },
        { lean: true }
      );

      if (get_user && get_user.length > 0) {
        throw `Email Already Exist`;
      }

      let data_to_save = {
        name: name,
        email: email.toLowerCase().trim(),
        password: await Common.bcryptPassword(password),
      };

      let data: any = await Model.User.create(data_to_save);
      let genrate_token: any = await Common.generateToken(data._id);

      let response = await Common.makeUserResponse(data, genrate_token);
      return response;
    } catch (err) {
      throw err;
    }
  };
}
