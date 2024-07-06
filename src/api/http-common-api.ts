import axios from "axios";

const access_token = localStorage.getItem("access_token");

console.log(access_token?.replace('\"', ''))

const axiosInstance = axios.create();

// export default axios.create({
//     baseURL: "http://localhost:8080/api",
//     headers: {
//         "Content-type": "application/json",
//         "Access-Control-Allow-Headers": "*",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "*",
//         "Authorization": `Bearer ${access_token?.replaceAll('\"', '')}`
//     }
// });

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json";
        }
        config.headers["Accept"] = "application/json";
        // 'Access-Control-Allow-Origin': '*',
        config.headers["Access-Control-Allow-Origin"] = "*";
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        

        // Remove redundant slashes in the URL
        config.url = config.url?.replace(/([^:]\/)\/+/g, "$1");
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const prevRequest = error.config;
        if (error.response.status === 401 && !prevRequest.sent) {
            prevRequest.sent = true;
            const refreshToken = localStorage.getItem("refreshToken");
            // try {
            //     const resp = await baseInstance.post(API_URL + "/auth/v1/refresh-token", { refreshToken });
            //     if (resp.data.data.accessToken && resp.data.data.refreshToken) {
            //         const credentialData = resp.data.data;
            //         localStorage.setItem("accessToken", credentialData.accessToken);
            //         localStorage.setItem("refreshToken", credentialData.refreshToken);
            //         const userProfile = parseGoogleJwt(credentialData.accessToken);
            //         localStorage.setItem(ACCESS_CONTROL_RESOURCES.ROLE, userProfile.role ?? "unknown");
            //         prevRequest.headers["Authorization"] = `Bearer ${credentialData.accessToken}`;
            //         return axiosInstance(prevRequest);
            //     }
            //     await Promise.reject("Refresh token failed");
            // } catch (err) {
            //     localStorage.removeItem("accessToken");
            //     localStorage.removeItem("refreshToken");
            // }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;