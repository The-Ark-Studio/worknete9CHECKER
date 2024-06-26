// /*
//  * Copyright (c) 2024.
//  * The Ark Studio Co,Ltd.
//  * All rights reserved.
//  */

// import { AuthProvider } from "@refinedev/core";
// import { Users } from "../utils/users";
// export const TOKEN_KEY = "refine-auth";

// // interface IUserData {
// //     userId: number,
// //     email: string,
// //     password: string,
// //     username: string,
// //     age: number,
// //     name: string,
// //     givenName: string,
// //     birthday: string,
// //     phoneNumber: string,
// //     countryCode: string,
// //     phoneCode: string,
// //     gender: string,
// //     userLockedFlag: boolean,
// //     avatarImg: string,
// //     role: string
// // }

// export const authProvider: AuthProvider = {
//     login: async ({ email, password }) => {
//         const user = await Users.find(
//             (user) => user.email == email && user.password == password && user.role !== "Member"
//         );
//         if (user !== undefined) {
//             localStorage.setItem("userId", String(user.userId));
//             localStorage.setItem("role", user.role);
//             return Promise.resolve({
//                 success: true,
//                 redirectTo: "/admin/dashboard",
//                 userDetails: user
//             });
//         }

//         return Promise.resolve({
//             success: false,
//             error: {
//                 name: "LoginError",
//                 message: "Invalid username or password  TTT"
//             }
//         });
//     },
//     logout: async () => {
//         localStorage.removeItem("userId");
//         return {
//             success: true,
//             redirectTo: "/admin/login"
//         };
//     },
//     check: async () => {
//         const token = localStorage.getItem("userId");
//         if (token) {
//             return {
//                 authenticated: true
//             };
//         }

//         return {
//             authenticated: false,
//             redirectTo: "/admin/login"
//         };
//     },
//     getPermissions: async () => null,
//     getIdentity: async () => {
//         const token = JSON.parse(localStorage.getItem("userId") as string);
//         if (token === undefined || token === null) return null;
//         const currentUser = await Users.find((user) => {
//             if (token !== undefined && user.userId == parseInt(token)) {
//                 return user;
//             }
//         });
//         return currentUser;
//     },
//     onError: async (error) => {
//         console.error(error);
//         return { error };
//     }
// };
