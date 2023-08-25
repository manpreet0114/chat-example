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
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./module/routes"));
const db_config_1 = __importDefault(require("./db.config"));
const socket_connection_1 = __importDefault(require("./module/socket.connection"));
const output_openapi_json_1 = __importDefault(require("./output.openapi.json"));
const { LOCAL_PORT } = process.env;
const PORT = LOCAL_PORT;
console.log("rocess.", process.env.PORT);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({ origin: "*" }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    (0, db_config_1.default)();
    app.use('/user', routes_1.default);
    let openapi_options = { customSiteTitle: "Chat Example" };
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(output_openapi_json_1.default, openapi_options));
    app.get("/", (req, res) => {
        res.send("Hello World!---------");
    });
    let server = http_1.default.createServer(app);
    yield server.listen(process.env.PORT, () => {
        console.log(`Server running at port at3 ${process.env.PORT}...`);
    });
    (0, socket_connection_1.default)(server);
}))();
