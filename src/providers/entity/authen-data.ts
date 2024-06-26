import IRole from "./role";

export default interface IAuthenData {
    id?: any | null;
    username: string;
    email: string;
    role: IRole | any;
    accessToken: string;
    tokenType: string;
    // permissions: Array<string>
}
