export default interface IAuthenData {
    id?: any | null;
    username: string;
    email: string;
    roles: Array<string>;
    accessToken: string;
    tokenType: string;
    // permissions: Array<string>
}
