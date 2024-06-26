import axios from "axios";

const access_token = localStorage.getItem("access_token");

console.log(access_token?.replace('\"', ''))

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Authorization": `Bearer ${access_token?.replaceAll('\"', '')}`
    }
});
