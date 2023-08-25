import { Schema, model } from "mongoose";

const connectionSchema = new Schema({
  from_user_id: { type: Schema.Types.ObjectId, default: null, ref: "user" },
  to_user_id: { type: Schema.Types.ObjectId, default: null, ref: "user" },
  last_message: { type: String, default: null },
  updated_at: { type: Number, default: +new Date() },
  created_at: { type: Number, default: +new Date() },
});

const Connection = model("connection", connectionSchema);
export default Connection;
