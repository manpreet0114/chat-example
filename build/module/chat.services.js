"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("./common"));
const Model = __importStar(require("../models/index"));
const mongoose_1 = require("mongoose");
let projection = { __v: 0 };
let options = { new: true };
class ChatServices {
}
_a = ChatServices;
ChatServices.getUserId = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("token ", token);
        if (!token) {
            // await GlobalHelper.handleCustomError(ERROR_MESSAGES.UNAUTHORIZED);
            throw "UNAUTHORIZED";
        }
        if (token.startsWith("Bearer")) {
            token = token.split(" ")[1];
        }
        let token_data = yield common_1.default.decodeToken(token, "USER");
        return token_data;
    }
    catch (err) {
        throw err;
    }
});
ChatServices.checkConnection = (from_user_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { to_user_id } = payload;
        let response;
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
        let connection = yield Model.Connection.find(query, projection, options);
        console.log("connection.length = ", connection.length);
        //check existing connection
        if (connection && connection.length > 0) {
            response = yield CommonHelper.connectionResponse(connection[0]._id, to_user_id);
            console.log("Connection Exist");
        }
        else {
            //create connection
            response = yield CommonHelper.createConnection(from_user_id, to_user_id);
            console.log("Created New Connection");
        }
        return response;
    }
    catch (err) {
        throw err;
    }
});
exports.default = ChatServices;
class CommonHelper {
}
_b = CommonHelper;
CommonHelper.connectionResponse = (connection_id, send_to) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let getConnectionDetail = yield _b.getConnectionDetail(connection_id);
        if (getConnectionDetail) {
            let getUserDetail = yield _b.getUserDetail(send_to);
            getConnectionDetail.user_detail = getUserDetail;
            return getConnectionDetail;
        }
        else
            return null;
    }
    catch (err) {
        throw err;
    }
});
CommonHelper.getConnectionDetail = (connection_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = { _id: new mongoose_1.Types.ObjectId(connection_id) };
        let get_detail = yield Model.Connection.findOne(query, projection, options);
        return get_detail;
    }
    catch (err) {
        throw err;
    }
});
CommonHelper.getUserDetail = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = { _id: new mongoose_1.Types.ObjectId(user_id) };
        let get_detail = yield Model.Connection.findOne(query, projection, options);
        return get_detail;
    }
    catch (err) {
        throw err;
    }
});
CommonHelper.createConnection = (from_user_id, to_user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let save_data;
        if (from_user_id && to_user_id) {
            save_data = {
                from_user_id: from_user_id,
                to_user_id: to_user_id,
            };
            let connection = yield Model.Connection.create();
            let response = yield _b.connectionResponse(connection._id, to_user_id);
            return response;
        }
        else
            throw `Something Went Wrong`;
    }
    catch (err) {
        throw err;
    }
});
