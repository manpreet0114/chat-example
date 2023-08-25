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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Model = __importStar(require("../models/index"));
let { SALT_ROUNDS, ADMIN_SK, USER_SK } = process.env;
class Common {
}
_a = Common;
Common.bcryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hash_password = yield bcrypt_1.default.hash(password, Number(SALT_ROUNDS));
        return hash_password;
    }
    catch (err) {
        throw err;
    }
});
Common.generateToken = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token_data = {
            _id: user_id,
            scope: "user",
            collection: Model.User,
            token_gen_at: +new Date(),
        };
        let genrated_token = yield _a.createToken(token_data);
        let save_session = yield _a.saveSession(genrated_token, token_data);
        return save_session;
    }
    catch (err) {
        throw err;
    }
});
Common.createToken = (token_data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let secret_key = null;
        if (token_data.scope == "admin") {
            secret_key = ADMIN_SK;
        }
        if (token_data.scope == "user") {
            secret_key = USER_SK;
        }
        const token = yield jsonwebtoken_1.default.sign(token_data, secret_key);
        return token;
    }
    catch (err) {
        throw err;
    }
});
Common.saveSession = (access_token, token_data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { _id: user_id, token_gen_at } = token_data;
        let set_data = {
            type: "USER",
            user_id: user_id,
            access_token: access_token,
            token_gen_at: token_gen_at,
            created_at: +new Date(),
        };
        let response = yield Model.Session.create(set_data);
        return response;
    }
    catch (err) {
        throw err;
    }
});
Common.makeUserResponse = (user_data, session_data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { _id: user_id } = user_data;
        let { _id: session_id } = session_data;
        let options = { lean: true };
        let user_response = yield Model.User.findOne({ _id: user_id }, { email: 1 }, options);
        let session_response = yield Model.Session.findOne({ _id: session_id }, { access_token: 1, token_gen_at: 1 }, options);
        return {
            email: user_response.email,
            session: session_response.access_token,
            token_gen_at: session_response.token_gen_at,
        };
    }
    catch (err) {
        throw err;
    }
});
Common.decodeToken = (token, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let set_secret_key = type == "admin" ? ADMIN_SK : USER_SK;
        let decoded_token = yield jsonwebtoken_1.default.verify(token, set_secret_key);
        return decoded_token;
    }
    catch (err) {
        throw err;
    }
});
exports.default = Common;
