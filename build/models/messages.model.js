"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messagesSchema = new mongoose_1.Schema({
    connection_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        default: null,
        ref: "connection",
    },
    from_user_id: { type: mongoose_1.Schema.Types.ObjectId, default: null, ref: "user" },
    to_user_id: { type: mongoose_1.Schema.Types.ObjectId, default: null, ref: "user" },
    message: { type: String, default: null },
    read_by: { type: [mongoose_1.Schema.Types.ObjectId], default: null, ref: "user" },
    deleted_type: { type: String, default: null },
    deleted_for: { type: [mongoose_1.Schema.Types.ObjectId], default: null, ref: "user" },
    created_at: { type: Number, default: +new Date() },
});
const Messages = (0, mongoose_1.model)("message", messagesSchema);
exports.default = Messages;
