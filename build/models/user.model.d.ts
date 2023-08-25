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
declare const User: import("mongoose").Model<{
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    password: string;
    country_code: string;
    phone_no: string;
    phone_otp: string;
    otp: string;
    fp_otp: string;
    unique_code: string;
    email_verified: boolean;
    phone_verified: boolean;
    fp_otp_verified: boolean;
    social_token: string;
    is_blocked: boolean;
    is_deleted: boolean;
    is_deactivated: boolean;
    deactived_reason: string;
    deactived_description: string;
    created_at: number;
    updated_at: number;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    password: string;
    country_code: string;
    phone_no: string;
    phone_otp: string;
    otp: string;
    fp_otp: string;
    unique_code: string;
    email_verified: boolean;
    phone_verified: boolean;
    fp_otp_verified: boolean;
    social_token: string;
    is_blocked: boolean;
    is_deleted: boolean;
    is_deactivated: boolean;
    deactived_reason: string;
    deactived_description: string;
    created_at: number;
    updated_at: number;
}> & {
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    password: string;
    country_code: string;
    phone_no: string;
    phone_otp: string;
    otp: string;
    fp_otp: string;
    unique_code: string;
    email_verified: boolean;
    phone_verified: boolean;
    fp_otp_verified: boolean;
    social_token: string;
    is_blocked: boolean;
    is_deleted: boolean;
    is_deactivated: boolean;
    deactived_reason: string;
    deactived_description: string;
    created_at: number;
    updated_at: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    password: string;
    country_code: string;
    phone_no: string;
    phone_otp: string;
    otp: string;
    fp_otp: string;
    unique_code: string;
    email_verified: boolean;
    phone_verified: boolean;
    fp_otp_verified: boolean;
    social_token: string;
    is_blocked: boolean;
    is_deleted: boolean;
    is_deactivated: boolean;
    deactived_reason: string;
    deactived_description: string;
    created_at: number;
    updated_at: number;
}, import("mongoose").Document<unknown, {}, {
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    password: string;
    country_code: string;
    phone_no: string;
    phone_otp: string;
    otp: string;
    fp_otp: string;
    unique_code: string;
    email_verified: boolean;
    phone_verified: boolean;
    fp_otp_verified: boolean;
    social_token: string;
    is_blocked: boolean;
    is_deleted: boolean;
    is_deactivated: boolean;
    deactived_reason: string;
    deactived_description: string;
    created_at: number;
    updated_at: number;
}> & {
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    password: string;
    country_code: string;
    phone_no: string;
    phone_otp: string;
    otp: string;
    fp_otp: string;
    unique_code: string;
    email_verified: boolean;
    phone_verified: boolean;
    fp_otp_verified: boolean;
    social_token: string;
    is_blocked: boolean;
    is_deleted: boolean;
    is_deactivated: boolean;
    deactived_reason: string;
    deactived_description: string;
    created_at: number;
    updated_at: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default User;
