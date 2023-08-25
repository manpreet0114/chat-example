import { Schema, model } from "mongoose";

const messagesSchema = new Schema({
  connection_id: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: "connection",
  },
  from_user_id: { type: Schema.Types.ObjectId, default: null, ref: "user" },
  to_user_id: { type: Schema.Types.ObjectId, default: null, ref: "user" },
  message: { type: String, default: null },
  read_by:  { type: [Schema.Types.ObjectId], default: null, ref: "user" },
  deleted_type: { type: String, default: null },
  deleted_for:  { type: [Schema.Types.ObjectId], default: null, ref: "user" },
  created_at: { type: Number, default: +new Date() },
});

const Messages = model("message", messagesSchema);
export default Messages;
