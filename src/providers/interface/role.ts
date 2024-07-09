import IPermission from "./permission";

export default interface IRole {
    roleId?: any | null;
    name: string | "";
    description: string;
    permissions: Array<IPermission>;
}
