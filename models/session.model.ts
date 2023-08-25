import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
    user_id         :     { type: Schema.Types.ObjectId, default: null, ref: "user" },
    access_token    :     { type: String, default: null },
    fcm_token       :     { type: String, default : null },
    token_gen_at    :     { type: Number, default: 0 },
    created_at      :     { type: Number, default: +new Date() },
});

const Session = model("session", sessionSchema);
export default Session;