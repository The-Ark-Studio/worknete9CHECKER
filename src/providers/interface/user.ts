import IRole from "./role";

export default interface IUserData {
    userId?: any | null;
    name: string;
    givenName: string;
    username: string;
    email: string;
    birthday: string;
    phoneNumber: number;
    countryCode: string;
    phoneCode: number;
    gender: string;
    location: string;
    companyName: string;
    establishedYears: string;
    userLockedFlag: string;
    status: string;
    avatarImg: string;
    role: IRole | any;
    accessToken: string;
    tokenType: string;
    // permissions: Array<string>
}
