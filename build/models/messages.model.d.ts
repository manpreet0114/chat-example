/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
declare const Messages: import("mongoose").Model<{
    read_by: import("mongoose").Types.ObjectId[];
    deleted_for: import("mongoose").Types.ObjectId[];
    message?: unknown;
    created_at?: unknown;
    from_user_id?: import("mongoose").Types.ObjectId;
    to_user_id?: import("mongoose").Types.ObjectId;
    connection_id?: import("mongoose").Types.ObjectId;
    deleted_type?: unknown;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    read_by: import("mongoose").Types.ObjectId[];
    deleted_for: import("mongoose").Types.ObjectId[];
    message?: unknown;
    created_at?: unknown;
    from_user_id?: import("mongoose").Types.ObjectId;
    to_user_id?: import("mongoose").Types.ObjectId;
    connection_id?: import("mongoose").Types.ObjectId;
    deleted_type?: unknown;
}> & {
    read_by: import("mongoose").Types.ObjectId[];
    deleted_for: import("mongoose").Types.ObjectId[];
    message?: unknown;
    created_at?: unknown;
    from_user_id?: import("mongoose").Types.ObjectId;
    to_user_id?: import("mongoose").Types.ObjectId;
    connection_id?: import("mongoose").Types.ObjectId;
    deleted_type?: unknown;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    message: string;
    created_at: number;
    from_user_id: import("mongoose").Types.ObjectId;
    to_user_id: import("mongoose").Types.ObjectId;
    connection_id: import("mongoose").Types.ObjectId;
    deleted_type: string;
    read_by?: import("mongoose").Types.ObjectId[];
    deleted_for?: import("mongoose").Types.ObjectId[];
}, import("mongoose").Document<unknown, {}, {
    message: string;
    created_at: number;
    from_user_id: import("mongoose").Types.ObjectId;
    to_user_id: import("mongoose").Types.ObjectId;
    connection_id: import("mongoose").Types.ObjectId;
    deleted_type: string;
    read_by?: import("mongoose").Types.ObjectId[];
    deleted_for?: import("mongoose").Types.ObjectId[];
}> & {
    message: string;
    created_at: number;
    from_user_id: import("mongoose").Types.ObjectId;
    to_user_id: import("mongoose").Types.ObjectId;
    connection_id: import("mongoose").Types.ObjectId;
    deleted_type: string;
    read_by?: import("mongoose").Types.ObjectId[];
    deleted_for?: import("mongoose").Types.ObjectId[];
} & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default Messages;
