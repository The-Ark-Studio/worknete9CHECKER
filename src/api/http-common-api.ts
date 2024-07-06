import axios from "axios";

const access_token = localStorage.getItem("access_token");

console.log(access_token?.replace('\"', ''))

export default axios.create({
    baseURL: "https://worknete9.com/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Authorization": `Bearer ${access_token?.replaceAll('\"', '')}`
    }
});
