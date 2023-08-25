"use strict";
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
const services_1 = __importDefault(require("./services"));
class Controller {
}
_a = Controller;
Controller.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield services_1.default.signUp(req);
        yield res.send(response);
    }
    catch (err) {
        yield res.status(400).send({
            success: false,
            type: "BAD_REQUEST",
            message: err,
        });
    }
});
exports.default = Controller;
