export default class Common {
    static bcryptPassword: (password: any) => Promise<any>;
    static generateToken: (user_id: any) => Promise<any>;
    static createToken: (token_data: any) => Promise<string>;
    static saveSession: (access_token: any, token_data: any) => Promise<any>;
    static makeUserResponse: (user_data: any, session_data: any) => Promise<{
        email: any;
        session: any;
        token_gen_at: any;
    }>;
    static decodeToken: (token: any, type: any) => Promise<any>;
}
