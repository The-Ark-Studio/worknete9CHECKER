/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { AuthProvider } from "@refinedev/core";

import http from "@src/api/http-login";
import IAuthenData from "@src/api/authenticated/response/authenData";
import ILoginData from "@src/api/authenticated/payload/loginData";
import IUserData from "../authenticated/response/userData"

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthProvider = {
    login: async ({ username, email, password }) => {
        if ((username || email) && password) {
            var result = await http.post<IAuthenData>("/auth/signin", { username, email, password })
                .then(response => {
                    if (response.data.accessToken) {
                        localStorage.setItem("access_token", JSON.stringify(response.data.accessToken))
                        localStorage.setItem("userId", response.data.id)
                        localStorage.setItem("access_token", response.data.accessToken)
                    }
                    return response.data;
                });

            return {
                success: true,
                redirectTo: "/",
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
        localStorage.removeItem("user");
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
                headers: { Authorization: `Bearer ${token}` }
            }
            var result = await http.get<IUserData>("/user/" + userId, config)
                .then(response => {
                    if (response.data) {
                        localStorage.setItem("userDetails", JSON.stringify(response.data))
                    }
                    return response.data;
                })
            return result;
        }
        return null;
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    }
};
