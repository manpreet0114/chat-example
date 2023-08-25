"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, default: null, ref: "user" },
    access_token: { type: String, default: null },
    fcm_token: { type: String, default: null },
    token_gen_at: { type: Number, default: 0 },
    created_at: { type: Number, default: +new Date() },
});
const Session = (0, mongoose_1.model)("session", sessionSchema);
exports.default = Session;
