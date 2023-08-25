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
const Model = __importStar(require("../models/index"));
const common_1 = __importDefault(require("./common"));
class Service {
}
_a = Service;
Service.signUp = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, email, password } = req.body;
        let query = { email: email.toLowerCase().trim() };
        let get_user = yield Model.User.find(query, { __v: 0 }, { lean: true });
        if (get_user && get_user.length > 0) {
            throw `Email Already Exist`;
        }
        let data_to_save = {
            name: name,
            email: email.toLowerCase().trim(),
            password: yield common_1.default.bcryptPassword(password),
        };
        let data = yield Model.User.create(data_to_save);
        let genrate_token = yield common_1.default.generateToken(data._id);
        let response = yield common_1.default.makeUserResponse(data, genrate_token);
        return response;
    }
    catch (err) {
        throw err;
    }
});
exports.default = Service;
