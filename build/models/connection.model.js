"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectionSchema = new mongoose_1.Schema({
    from_user_id: { type: mongoose_1.Schema.Types.ObjectId, default: null, ref: "user" },
    to_user_id: { type: mongoose_1.Schema.Types.ObjectId, default: null, ref: "user" },
    last_message: { type: String, default: null },
    updated_at: { type: Number, default: +new Date() },
    created_at: { type: Number, default: +new Date() },
});
const Connection = (0, mongoose_1.model)("connection", connectionSchema);
exports.default = Connection;
