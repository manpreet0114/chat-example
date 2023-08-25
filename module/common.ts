import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as Model from "../models/index";

let { SALT_ROUNDS, ADMIN_SK, USER_SK } = process.env;

export default class Common {
  static bcryptPassword = async (password: any) => {
    try {
      const hash_password = await bcrypt.hash(password, Number(SALT_ROUNDS));
      return hash_password;
    } catch (err) {
      throw err;
    }
  };

  static generateToken = async (user_id: any) => {
    try {
      let token_data: any = {
        _id: user_id,
        scope: "user",
        collection: Model.User,
        token_gen_at: +new Date(),
      };

      let genrated_token = await this.createToken(token_data);
      let save_session = await this.saveSession(genrated_token, token_data);

      return save_session;
    } catch (err) {
      throw err;
    }
  };

  static createToken = async (token_data: any) => {
    try {
      let secret_key = null;
      if (token_data.scope == "admin") {
        secret_key = ADMIN_SK;
      }
      if (token_data.scope == "user") {
        secret_key = USER_SK;
      }
      const token: string = await jwt.sign(token_data, secret_key);

      return token;
    } catch (err) {
      throw err;
    }
  };

  static saveSession = async (access_token: any, token_data: any) => {
    try {
      let { _id: user_id, token_gen_at } = token_data;
      let set_data: any = {
        type: "USER",
        user_id: user_id,
        access_token: access_token,
        token_gen_at: token_gen_at,
        created_at: +new Date(),
      };
      let response: any = await Model.Session.create(set_data);
      return response;
    } catch (err) {
      throw err;
    }
  };

  static makeUserResponse = async (user_data: any, session_data: any) => {
    try {
      let { _id: user_id } = user_data;
      let { _id: session_id } = session_data;

      let options = { lean: true };

      let user_response: any = await Model.User.findOne(
        { _id: user_id },
        { email: 1 },
        options
      );

      let session_response: any = await Model.Session.findOne(
        { _id: session_id },
        { access_token: 1, token_gen_at: 1 },
        options
      );
      return {
        email: user_response.email,
        session: session_response.access_token,
        token_gen_at: session_response.token_gen_at,
      };
    } catch (err) {
      throw err;
    }
  };

  static decodeToken = async(token:any, type:any) => {
    try {
      let set_secret_key = type == "admin" ? ADMIN_SK : USER_SK;
      let decoded_token = await jwt.verify(token, set_secret_key);
      return decoded_token;
    }catch(err){
      throw err;
    }
  }
}
