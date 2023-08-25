"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    image: { type: String, default: null },
    email: { type: String, default: null, unique: true },
    password: { type: String, default: null },
    country_code: { type: String, default: null },
    phone_no: { type: String, default: null },
    phone_otp: { type: String, default: null },
    otp: { type: String, default: null },
    fp_otp: { type: String, default: null },
    unique_code: { type: String, default: null },
    email_verified: { type: Boolean, default: false },
    phone_verified: { type: Boolean, default: false },
    fp_otp_verified: { type: Boolean, default: false },
    social_token: { type: String, default: null },
    is_blocked: { type: Boolean, default: false },
    is_deleted: { type: Boolean, default: false },
    is_deactivated: { type: Boolean, default: false },
    deactived_reason: { type: String, default: null },
    deactived_description: { type: String, default: null },
    created_at: { type: Number, default: +new Date() },
    updated_at: { type: Number, default: 0 },
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
