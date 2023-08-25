import Common from "./common";
import * as Model from "../models/index";
import { Types } from "mongoose";

let projection = { __v: 0 };
let options = { new: true };

export default class ChatServices {
  static getUserId = async (token: any) => {
    try {
      console.log("token ", token);

      if (!token) {
        // await GlobalHelper.handleCustomError(ERROR_MESSAGES.UNAUTHORIZED);
        throw "UNAUTHORIZED";
      }
      if (token.startsWith("Bearer")) {
        token = token.split(" ")[1];
      }

      let token_data: any = await Common.decodeToken(token, "USER");
      return token_data;
    } catch (err) {
      throw err;
    }
  };

  static checkConnection = async (from_user_id: any, payload: any) => {
    try {
      let { to_user_id } = payload;
      let response: any;
      let query = {
        $or: [
          {
            $and: [{ from_user_id: from_user_id }, { to_user_id: to_user_id }],
          },
          {
            $and: [{ from_user_id: to_user_id }, { to_user_id: from_user_id }],
          },
        ],
      };

      let connection: any = await Model.Connection.find(
        query,
        projection,
        options
      );
      console.log("connection.length = ", connection.length);

      //check existing connection
      if (connection && connection.length > 0) {
        response = await CommonHelper.connectionResponse(
          connection[0]._id,
          to_user_id
        );
        console.log("Connection Exist");
      } else {
        //create connection
        response = await CommonHelper.createConnection(
          from_user_id,
          to_user_id
        );
        console.log("Created New Connection");
      }
      return response;
    } catch (err) {
      throw err;
    }
  };
}

class CommonHelper {
  static connectionResponse = async (connection_id: any, send_to: any) => {
    try {
      let getConnectionDetail: any = await this.getConnectionDetail(
        connection_id
      );
      if (getConnectionDetail) {
        let getUserDetail: any = await this.getUserDetail(send_to);
        getConnectionDetail.user_detail = getUserDetail;
        return getConnectionDetail;
      } else return null;
    } catch (err) {
      throw err;
    }
  };

  static getConnectionDetail = async (connection_id: any) => {
    try {
      let query = { _id: new Types.ObjectId(connection_id) };

      let get_detail = await Model.Connection.findOne(
        query,
        projection,
        options
      );
      return get_detail;
    } catch (err) {
      throw err;
    }
  };

  static getUserDetail = async (user_id: any) => {
    try {
      let query = { _id: new Types.ObjectId(user_id) };
      let get_detail = await Model.Connection.findOne(
        query,
        projection,
        options
      );
      return get_detail;
    } catch (err) {
      throw err;
    }
  };

  static createConnection = async (from_user_id: any, to_user_id: any) => {
    try {
      let save_data: any;
      if (from_user_id && to_user_id) {
        save_data = {
          from_user_id: from_user_id,
          to_user_id: to_user_id,
        };
        let connection: any = await Model.Connection.create();
        let response = await this.connectionResponse(
          connection._id,
          to_user_id
        );
        return response;
      } else throw `Something Went Wrong`;
    } catch (err) {
      throw err;
    }
  };
}
