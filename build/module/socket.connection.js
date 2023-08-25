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
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const chat_services_1 = __importDefault(require("./chat.services"));
const connect_socket = (server) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const io = new socket_io_1.Server(server, {
            cors: {
                origin: "*",
            },
        });
        io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("Connection Established...........");
            let token_value = socket.handshake.headers.authorization;
            console.log("token -- ", token_value);
            socket.on("join", (payload) => {
                socket.join(payload.room);
            });
            socket.on("message", (payload) => {
                const { room, message } = payload;
                io.to(room).emit("message", message);
                socket.emit("msg", message);
            });
            socket.on("create_connection", (payload) => __awaiter(void 0, void 0, void 0, function* () {
                let user_id = yield chat_services_1.default.getUserId(token_value);
                let get_connection = yield chat_services_1.default.checkConnection(user_id, payload);
                socket.emit("create_connection", { connection_id: get_connection._id });
                socket.join(get_connection._id); //joining room
                socket.emit("join_connection", "Connection Joined");
            }));
        }));
    }
    catch (err) {
        console.log("Connection Creating Error");
        throw err;
    }
});
exports.default = connect_socket;
