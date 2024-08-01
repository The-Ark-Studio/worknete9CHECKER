/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { AuthProvider } from "@refinedev/core";

import http from "@src/api/http-login-api";
import IAuthenData from "@src/providers/interface/authen-data";
export const SECRET_KEY = "worknet-e9-fe-auth";

const configLogin = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    }
}

export const authProviderAdmin: AuthProvider = {
    login: async ({ username, email, password }) => {
        let redirectName = "/";
        // console.log("hased: ", password)
        if ((username || email) && password) {
            var result = await http.post<IAuthenData>("/auth/admin/signin", { username, email, password })
                .then(response => {
                    // console.log(redirectName)
                    if (response.data.token) {
                        localStorage.setItem("access_token", JSON.stringify(response.data.token))
                        // console.log(redirectName)
                        localStorage.setItem("userId", response.data.id)
                        localStorage.setItem("role", JSON.stringify(response.data.role))
                        if (response.data.role != "User")
                            redirectName = "/"
                    }

                    return response.data;
                });
            // console.log(redirectName)
            return {
                success: true,
                redirectTo: redirectName,
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
        localStorage.removeItem("access_token");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        return {
            success: true,
            redirectTo: "/login"
        };
    },
    check: async () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            return {
                authenticated: true
            };
        }

        return {
            authenticated: false,
            redirectTo: "/login"
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = localStorage.getItem("access_token");
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
        if (error?.statusCode == 401 || error?.response?.status == 401) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            return {
                logout: true,
                redirectTo: "/login",
                error: new Error(error),
            };
        }
        return { error };
    }
};
