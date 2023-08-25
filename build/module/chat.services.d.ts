export default class ChatServices {
    static getUserId: (token: any) => Promise<any>;
    static checkConnection: (from_user_id: any, payload: any) => Promise<any>;
}
