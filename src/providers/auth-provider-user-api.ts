/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { AuthProvider } from "@refinedev/core";

import http from "@src/api/http-login-api";
import IAuthenData from "@src/providers/entity/authen-data";
export const SECRET_KEY = "worknet-e9-fe-auth";

export const authProviderUser: AuthProvider = {
    login: async ({ username, email, password }) => {
        let redirectName = "/";
        console.log("hased: ", password)
        if ((username || email) && password) {
            var result = await http.post<IAuthenData>("/auth/signin", { username, email, password })
                .then(response => {
                    if (response.data.accessToken) {
                        localStorage.setItem("token", JSON.stringify(response.data.accessToken))
                        localStorage.setItem("userId", response.data.id)

                    }

                    return response.data;
                });
            return {
                success: true,
                redirectTo: '/main',
                result: result
            };
        }

        return {
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid username or password"
            }
        };
    },
    logout: async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        return {
            success: true,
            redirectTo: "/main"
        };
    },
    check: async () => {
        return {
            authenticated: true
        };
        // const token = localStorage.getItem("token");
        // if (token) {
        //     return {
        //         authenticated: true
        //     };
        // }

        // return {
        //     authenticated: false,
        //     redirectTo: "/main"
        // };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = localStorage.getItem("token");
        if (token) {
            let userId = localStorage.getItem("userId");
            const config = {
                headers: {
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Authorization": `Bearer ${token.replaceAll('\"', '')}`
                }
            }
            var result = await http.get<IAuthenData>("/users/" + userId, config)
                .then(response => {
                    if (response.data) {
                        localStorage.setItem("userDetails", JSON.stringify(response.data))
                        return response.data;
                    }
                    return null;
                })
            return result;
        }
        return null;
    },
    onError: async (error) => {
        console.error("error: ", error);
        if (error?.statusCode == 401) {
            return {
                logout: false,
                error: {
                    message: "Unauthorized"
                }
            };
        }
        return { error };
    }
};
