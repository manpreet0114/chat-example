export default class Service {
    static signUp: (req: any) => Promise<{
        email: any;
        session: any;
        token_gen_at: any;
    }>;
}
